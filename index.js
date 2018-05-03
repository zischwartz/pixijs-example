let app = new PIXI.Application({ width: 800, height: 800 });

//Add the canvas that Pixi automatically created for you to the HTML document
document.body.appendChild(app.view);

app.renderer.backgroundColor = 0xffffff;

// let texture = PIXI.utils.TextureCache["images/guy.png"];
// let sprite = new PIXI.Sprite(texture);

PIXI.loader.add("images/guy.jpg").load(setup);

let guy;

function setup() {
  guy = new PIXI.Sprite(PIXI.loader.resources["images/guy.jpg"].texture);
  app.stage.addChild(guy);
  guy.scale.x = 0.5;
  guy.scale.y = 0.5;
  app.ticker.add(delta => gameLoop(delta));
}

function gameLoop(delta) {
  guy.x += 1;
}

var sound = new Howl({
  src: ["audio/glass_clink.mp3"]
});

sound.play();

