import { CELL_WIDTH, CELL_HEIGHT } from './Constants'
import { Position } from './interfaces'

interface Styles {
  backgroundColor: string
}

class RenderObject {
  public width: number

  public height: number

  public position: Position

  public backgroundColor: string

  constructor(
    width: number,
    height: number,
    position: Position,
    styles?: Styles
  ) {
    this.width = width
    this.height = height
    this.position = position

    this.backgroundColor = styles?.backgroundColor || 'black'
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = this.backgroundColor

    ctx.fillRect(
      this.position.x * CELL_WIDTH,
      this.position.y * CELL_HEIGHT,
      this.width * CELL_WIDTH,
      this.height * CELL_HEIGHT
    )
  }
}

export default RenderObject
