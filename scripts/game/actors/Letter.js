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
    }

    onMouseClick() {
        console.log( name );
        //if (!this.chlid) {
            let tmpVec = InputController.mousePosition.sub(this.position);

            let sss = new TEST_ACTOR("Child");
            //this.chlid.Parent = this;
            sss.rotation = tmpVec.degAngle();//-1/4;
            sss.position = this.position.add(tmpVec);
            RenderData.spawnActor(sss);
        //}
    }

    onMouseOverlap() {
        let vector = this.position.sub(InputController.mousePosition)
        this.position = this.position.add(vector)
    }

}
