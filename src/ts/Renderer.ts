class Renderer {
  width: number

  heigth: number

  ctx: CanvasRenderingContext2D

  constructor(width: number, heigth: number, ctx: CanvasRenderingContext2D) {
    this.width = width
    this.heigth = heigth
    this.ctx = ctx
  }

  draw(...renderObjects) {
    renderObjects.forEach((renderObject) => {
      renderObject.draw(this.ctx)
    })
  }

  clearScreen() {
    this.ctx.clearRect(0, 0, this.width, this.heigth)
  }
}

export default Renderer
