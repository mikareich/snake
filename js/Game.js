import Renderer from "./Renderer.js";
import { BASE_TICKSPEED } from "./Constants.js";
class Game {
  constructor(width, height, ctx) {
    this.width = width;
    this.height = height;
    this.ctx = ctx;

    this.renderer = new Renderer(width, height, ctx);

    this.state = "paused";
    this.tickSpeedMultiplier = 1;
    this.gameObjects = [];
    this.score = 0;
    this.timePlaying = 0;
  }

  togglePause() {
    this.state = this.state === "paused" ? "running" : "paused";
  }

  get tickSpeed() {
    return BASE_TICKSPEED * this.tickSpeedMultiplier;
  }

  draw() {
    this.renderer.draw(...this.getRenderObjects());
  }

  update(deltaTime) {
    if (this.state === "running") {
      this.timePlaying += deltaTime;
      this.gameObjects.forEach((gameObject) => gameObject.update(this));
      // update score
      this.score += Math.round(deltaTime / 10);
    }
  }

  getRenderObjects() {
    return this.gameObjects
      .map((gameObject) => gameObject.getRenderObjects())
      .flat(2);
  }
}

export default Game;
