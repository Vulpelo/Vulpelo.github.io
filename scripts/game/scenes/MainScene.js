class MainScene {
    constructor() {       
        // let ac = new TEST_ACTOR("MAIN");
        // ac.Position = new Vector2d(200, 200);
        // ac.Rotation = 0;

        // RenderData.spawnActor(ac);
        
        this.generateText("VULPELO's site", new Vector2d(150, 100))
        this.generateText("The quick brown fox", new Vector2d(25, 150))
        this.generateText("jumps over a lazy dog", new Vector2d(25, 200))
    }

    getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    randomColor() {
        return "#".concat(this.getRandomInt(16777215).toString(16));
    }

    generateText(str, startPos) {
        for (let i = 0; i<str.length; i++)
        { 
            let c1 = new Letter(this.randomColor(), str[i], "50px Bold");
            c1.setPosition(new Vector2d(startPos.getX + this.getRandomInt(8) + 50 * i, startPos.getY + this.getRandomInt(8)));
            c1.Rotation = 0;

            RenderData.spawnActor(c1);
        }
    }

    start() {

    }

}