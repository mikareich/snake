import GameObject from './GameObject'
import { Position } from './interfaces'
import RenderObject from './RenderObject'

type SnakeDirection = 'up' | 'down' | 'left' | 'right'

class Snake implements GameObject {
  public parts: RenderObject[] = []

  public renderObjects: RenderObject[] = this.parts

  public direction: SnakeDirection = 'right'

  public startPosition: Position

  constructor(startPosition: Position, startLength = 1) {
    this.startPosition = startPosition

    // Add start parts
    for (let i = 0; i < startLength; i += 1) {
      this.addPart()
    }
  }

  /** Append a new part to the snake */
  addPart() {
    const firstPart = this.parts.length === 0

    // If the snake is empty, add a head, otherwise use the last part as a reference
    const position = firstPart
      ? this.startPosition
      : { ...this.parts[this.parts.length - 1].position }

    const part = new RenderObject(1, 1, position, {
      backgroundColor: firstPart ? 'black' : 'green',
    })

    this.parts.push(part)
  }

  /** Change the direction of the snake */
  changeDirection(direction: SnakeDirection) {
    // Only allow changing direction if the new direction is not the opposite of the current direction
    if (
      (this.direction === 'up' && direction === 'down') ||
      (this.direction === 'down' && direction === 'up') ||
      (this.direction === 'left' && direction === 'right') ||
      (this.direction === 'right' && direction === 'left')
    )
      return

    this.direction = direction
  }

  /** Move snake in direction and shift all parts up */
  move() {
    // Shift all parts up
    for (let i = this.parts.length - 1; i > 0; i -= 1) {
      this.parts[i].position = { ...this.parts[i - 1].position }
    }

    // Move head
    const [firstPart] = this.parts
    switch (this.direction) {
      case 'right':
        firstPart.position.x += 1
        break
      case 'left':
        firstPart.position.x -= 1
        break
      case 'up':
        firstPart.position.y -= 1
        break
      case 'down':
        firstPart.position.y += 1
        break
      default:
    }
  }

  update() {
    this.move()
  }
}
export default Snake
