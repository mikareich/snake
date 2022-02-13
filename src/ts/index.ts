import { GAME_WIDTH, GAME_HEIGHT } from './Constants'
import drawGrid from './drawGrid'
import KeyboardHandler from './KeyboardHandler'
import Game from './Game'
import Snake from './Snake'
import Apple from './Apple'
import udpateStats from './updateStats'

// ** INITIALIZE ** //
const gameScreen = <HTMLCanvasElement>document.getElementById('game-screen')
const ctx = gameScreen.getContext('2d')

gameScreen.width = GAME_WIDTH
gameScreen.height = GAME_HEIGHT

const game = new Game(GAME_WIDTH, GAME_HEIGHT, ctx)

const snake = new Snake({ x: 0, y: 0 }, 10)
game.gameObjects.push(snake)

const apple = new Apple({ x: 5, y: 3 })
game.gameObjects.push(apple)

KeyboardHandler({ snake, game })

// ** GAMELOOP ** //
let lastTimestamp = 0
function gameloop(passedTime = 0) {
  const deltaTime = passedTime - lastTimestamp

  if (deltaTime >= 1000 / game.tickSpeed) {
    lastTimestamp = passedTime

    // process game logic
    game.draw()
    game.update(deltaTime)

    drawGrid(ctx)
  }

  udpateStats(game, snake)

  window.requestAnimationFrame(gameloop)
}

gameloop()
