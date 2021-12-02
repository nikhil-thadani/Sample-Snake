import { Application, Container, Rectangle, Graphics } from "pixi.js";
const app = new Application({
  width: 1300,
  height: 720,
});
document.body.appendChild(app.view);
let snakes = [
  { x: 10, y: 10, w: 20, h: 20 },
  { x: 20, y: 10, w: 20, h: 20 },
  { x: 30, y: 10, w: 20, h: 20 },
];
const container = new Container();
app.stage.addChild(container);

draw();
function draw() {
  snakes.forEach((snake) => {
    const rect = new Graphics();
    rect.beginFill(0x449955);
    rect.drawRect(snake.x, snake.y, snake.w, snake.h);
    rect.endFill();
    container.addChild(rect);
  });
}
let snakeHead = container.children[container.children.length - 1];
// updatePos();
// function updatePos() {}
let direction = "";
let isX = false;
let isY = false;
document.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "ArrowRight":
      direction = "right";
      break;
    case "ArrowLeft":
      direction = "left";
      break;
    case "ArrowUp":
      direction = "up";
      break;
    case "ArrowDown":
      direction = "down";
      break;
  }
});
setInterval(() => {
  moveSnake();
}, 1000);
function moveSnake() {
  if (direction == "right") {
    const lastElm = snakes.pop();
    lastElm.x;
    draw();
    //   lastElm.x =
  } else if (direction == "left") {
  } else if (direction == "down") {
  }
}
