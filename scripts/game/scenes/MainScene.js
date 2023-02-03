class MainScene {
    constructor() {
        let ac = new TEST_ACTOR("MAIN");
        ac.Position = new Vector2d(200, 200);
        ac.Rotation = 0;

        RenderData.spawnActor(ac);
        
        let str = "VULPELO";
        for (let i = 0; i<str.length; i++)
        { 
            let c1 = new Letter(this.randomColor(), str[i], "50px Bold");
            c1.Position = new Vector2d(100 + this.getRandomInt(8) + 50 * i, 100 + this.getRandomInt(10));
            c1.Rotation = 0;

            RenderData.spawnActor(c1);
        }
    }

    getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    randomColor() {
        return "#".concat(this.getRandomInt(16777215).toString(16));
    }

    start() {

    }

}