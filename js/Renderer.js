class Renderer {
  constructor(width, heigth, ctx) {
    this.width = width;
    this.heigth = heigth;
    this.ctx = ctx;
  }

  draw(...renderObjects) {
    renderObjects.forEach((renderObject) => {
      renderObject.draw(this.ctx);
    });
  }

  clearScreen() {
    this.ctx.clearRect(0, 0, this.width, this.heigth);
  }
}

export default Renderer;
