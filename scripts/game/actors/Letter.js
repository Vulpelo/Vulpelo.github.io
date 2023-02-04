class Letter extends Actor {
    constructor(color, text, style) {
        super();

        let rM = [new Circle(new Vector2d(0,0)), new Text(new Vector2d(-18,17))]
        rM[0].dimensions = [18];
        rM[0].color = "transparent";
        rM[1].color = color;
        rM[1].text = text;
        rM[1].fontStyle = style;
        this.setModel = rM;

        this.velocityDir = new Vector2d(0,0)
        this.damper = 0.99;
        this.margin = 10;
        this.goBack = false;
        this.startPosition = new Vector2d(0,0)
        this.timer = null;
    }

    onMouseClick() {
        let tmpVec = InputController.mousePosition.sub(this.position);

        let sss = new Letter(this.setModel[1].color, this.setModel[1].text, this.setModel[1].fontStyle);
        //this.chlid.Parent = this;
        sss.rotation = tmpVec.degAngle();//-1/4;
        sss.position = this.position.add(tmpVec);
        RenderData.spawnActor(sss);
    }

    setPosition(position) {
        this.position = position;
        this.startPosition = new Vector2d(this.position.getX, this.position.getY);
    }

    eventTick() {
        this.position = this.position.add(this.velocityDir)
        this.velocityDir = this.velocityDir.mul(this.damper);

        if (this.goBack !== true) {
            if (this.position.getX < 0 && this.velocityDir.x < 0) 
            this.velocityDir.x = -this.velocityDir.x
            if (this.position.getY < 0 && this.velocityDir.y < 0) 
            this.velocityDir.y = -this.velocityDir.y
            if (this.position.getX > RenderData.window.clientWidth && this.velocityDir.x > 0) 
            this.velocityDir.x = -this.velocityDir.x
            if (this.position.getY > RenderData.window.clientHeight && this.velocityDir.y > 0) 
            this.velocityDir.y = -this.velocityDir.y
        }
        else {
            let distanceVector = this.startPosition.sub(this.position);
            if (distanceVector.length() < 0.5) {
                this.goBack = false;
            }
            this.velocityDir = distanceVector.normalize().mul(0.8);
        }
    }

    beginGoBack() {
        this.goBack = true;
        this.damper = 0.90;
    }

    onMouseOverlap() {
        this.damper = 0.99;
        this.goBack = false;
        this.velocityDir = this.position.sub(InputController.mousePosition).mul(2)
        if (this.timer != null) {
            clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => this.beginGoBack(), 8000);
    }
    

}
