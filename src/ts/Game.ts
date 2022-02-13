import Renderer from './Renderer'
import { BASE_TICKSPEED } from './Constants'
import GameObject from './GameObject'

class Game {
  public width: number

  public height: number

  public ctx: CanvasRenderingContext2D

  public state: 'paused' | 'running' | 'gameOver' = 'paused'

  public gameObjects: GameObject[] = []

  public score: number = 0

  private renderer: Renderer

  private tickSpeedMultiplier: number = 1

  private timePlaying: number = 0

  constructor(width: number, height: number, ctx: CanvasRenderingContext2D) {
    this.width = width
    this.height = height
    this.ctx = ctx
    this.renderer = new Renderer(width, height, ctx)
  }

  /** Toggles game state */
  togglePause() {
    this.state = this.state === 'paused' ? 'running' : 'paused'
  }

  /** Number of game ticks per second */
  get tickSpeed() {
    return BASE_TICKSPEED * this.tickSpeedMultiplier
  }

  /** Draws all game objects */
  draw() {
    this.renderer.clearScreen()
    this.renderer.draw(...this.renderObjects)
  }

  /** Performs game logics
   * @param deltaTime Time since last game tick
   */
  update(deltaTime: number) {
    if (this.state === 'running') {
      this.timePlaying += deltaTime
      this.gameObjects.forEach((gameObject) => gameObject.update(this))
      // update score
      this.score += Math.round(deltaTime / 10)
    }
  }

  /** All objects to render in game */
  private get renderObjects() {
    return this.gameObjects
      .map((gameObject) => gameObject.renderObjects)
      .flat(2)
  }
}

export default Game
