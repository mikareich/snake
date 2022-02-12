import RenderObject from "./RenderObject.js";

class Snake {
  constructor(startPosition, startLength) {
    this.parts = [];
    this.direction = "right";
    this.startPosition = startPosition;

    this.PART_SIZE = {
      width: 1,
      height: 1,
    };

    // Add start parts
    for (let i = 0; i < startLength; i++) {
      this.addPart();
    }
  }

  /** Append a new part to the snake */
  addPart() {
    const firstPart = this.parts.length === 0;

    // If the snake is empty, add a head, otherwise use the last part as a reference
    const position = firstPart
      ? this.startPosition
      : Object.assign({}, this.parts[this.parts.length - 1].position);

    const part = new RenderObject(
      this.PART_SIZE.width,
      this.PART_SIZE.height,
      position
    );

    this.parts.push(part);
  }

  /** Move snake in direction and shift all parts up */
  move() {
    // Shift all parts up
    for (let i = this.parts.length - 1; i > 0; i--) {
      this.parts[i].position = Object.assign({}, this.parts[i - 1].position);
    }

    // Move head
    const [firstPart] = this.parts;
    switch (this.direction) {
      case "right":
        firstPart.position.x += 1;
        break;
      case "left":
        firstPart.position.x -= 1;
        break;
      case "up":
        firstPart.position.y -= 1;
        break;
      case "down":
        firstPart.position.y += 1;
        break;
    }
  }

  update() {
    this.move();
  }

  getRenderObjects() {
    return this.parts;
  }
}

export default Snake;
