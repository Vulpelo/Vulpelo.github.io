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
} 

class TEST_Angle extends Actor {
    constructor() {
        super();

        let rM = [new Circle(new Vector2d(0,0))]
        rM[0].dimensions = [20];
        rM[0].color = "red";
        this.setModel = rM;
    }

    onMouseClick() {
        let tmpVec = InputController.mousePosition.sub(this.Position);
        console.log(tmpVec.degAngle() + " deg");
        

        // sending data to .php file, and calling function when request finished and response is ready
        let xhttp = new XMLHttpRequest();         
        xhttp.open("POST", "./scripts/game/TEST_SCENES/t.php", true);

        let vars = "name=Damian";

        xhttp.onreadystatechange = function() {
            // 200 - OK; 404 - Page not found;
            if(this.readyState == 4 && this.status == 200) {
                let a = new TEST_Angle();
                a.Position = new Vector2d(10, 0);
                a.dimensions = [100];

                RenderData.spawnActor(a);
                // var return_data = xhttp.responseText;
                // document.getElementById("status").innerHTML = return_data;
            }
        }

        xhttp.send(vars);
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
