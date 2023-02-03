let t;
let rend;
let controller;

let MAIN_LOOP = function () {
    controller.loop();
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
  
async function demo() {
    let t = new MainScene();
    t.start();

    rend = new Rendering(data);

    controller = new Controller(data, rend);

    setInterval(MAIN_LOOP, 5);
}
  

/*/== == == MAIN == == ==/*/
let data = new RenderData();

demo();
