class TEST_ACTOR extends Actor {
    constructor(name) {
        super();
        this.name = name;

        let rM = [ new Rectangle(new Vector2d(0,0))];
        rM[0].dimensions = [25, 25];
        rM[0].color = "red";
        this.setModel = rM;

        this.chlid = null;
    }

    onMouseClick() {
        //if (!this.chlid) {
            let tmpVec = InputController.mousePosition.sub(this.position);
            let sss = new TEST_ACTOR("Child");
            //this.chlid.Parent = this;
            sss.rotation = tmpVec.degAngle();//-1/4;
            sss.position = this.position.add(tmpVec);
            console.log(sss.position.getX.toString() + ":" + sss.position.getY.toString());
            RenderData.spawnActor(sss);
        //}
    }
} 

class TEST_Image extends Actor {
    constructor() {
        super();
        let rM = [new MImage(new Vector2d(40,40), 
            Resources.getImagePath("b0"))];
        rM[0].dimensions = [50, 80];
        this.setModel = rM;
    }
}
