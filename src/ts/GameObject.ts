import Game from './Game'
import RenderObject from './RenderObject'

interface GameObject {
  renderObjects: RenderObject[]

  /** Updates the game object */
  update(game: Game): void
}

export default GameObject
