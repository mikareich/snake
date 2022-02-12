import { CELL_WIDTH, CELL_HEIGHT } from "./Constants.js";

class RenderObject {
  constructor(width, height, position, styles) {
    this.width = width;
    this.height = height;
    this.position = position;

    this.backgroundColor = styles?.backgroundColor || "red";
  }

  draw(ctx) {
    ctx.fillStyle = this.backgroundColor;

    ctx.fillRect(
      this.position.x * CELL_WIDTH,
      this.position.y * CELL_HEIGHT,
      this.width * CELL_WIDTH,
      this.height * CELL_HEIGHT
    );
  }
}

export default RenderObject;
