import Renderer from "./Renderer.js";
import { BASE_TICKSPEED } from "./Constants.js";
class Game {
  constructor(width, height, ctx) {
    this.width = width;
    this.height = height;
    this.ctx = ctx;

    this.renderer = new Renderer(width, height, ctx);

    this.tickSpeedMultiplier = 1;
    this.gameObjects = [];
  }

  get tickSpeed() {
    return BASE_TICKSPEED * this.tickSpeedMultiplier;
  }

  draw() {
    this.renderer.draw(...this.getRenderObjects());
  }

  update() {
    this.gameObjects.forEach((gameObject) => gameObject.update(this));
  }

  getRenderObjects() {
    return this.gameObjects
      .map((gameObject) => gameObject.getRenderObjects())
      .flat(2);
  }
}

export default Game;
