import Game from './Game'
import GameObject from './GameObject'
import { Position } from './interfaces'
import RenderObject from './RenderObject'

class Apple implements GameObject {
  public position: Position

  public renderObjects: RenderObject[]

  constructor(position: Position) {
    this.position = position

    this.renderObjects = [
      new RenderObject(1, 1, position, { backgroundColor: 'yellow' }),
    ]
  }

  // eslint-disable-next-line class-methods-use-this
  update(game: Game): void {}
}

export default Apple
