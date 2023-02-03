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
        this.damper = 0.991;
        this.margin = 10;
    }

    onMouseClick() {
        let tmpVec = InputController.mousePosition.sub(this.position);

        let sss = new Letter(this.setModel[1].color, this.setModel[1].text, this.setModel[1].fontStyle);
        //this.chlid.Parent = this;
        sss.rotation = tmpVec.degAngle();//-1/4;
        sss.position = this.position.add(tmpVec);
        RenderData.spawnActor(sss);
    }

    eventTick() {
        this.position = this.position.add(this.velocityDir)
        this.velocityDir = this.velocityDir.mul(this.damper);

        if (this.position.getX < 0 && this.velocityDir.x < 0) 
            this.velocityDir.x = -this.velocityDir.x
        if (this.position.getY < 0 && this.velocityDir.y < 0) 
            this.velocityDir.y = -this.velocityDir.y
        if (this.position.getX > RenderData.window.clientWidth && this.velocityDir.x > 0) 
            this.velocityDir.x = -this.velocityDir.x
        if (this.position.getY > RenderData.window.clientHeight && this.velocityDir.y > 0) 
            this.velocityDir.y = -this.velocityDir.y
    }

    onMouseOverlap() {
        this.velocityDir = this.position.sub(InputController.mousePosition)
    }

}
