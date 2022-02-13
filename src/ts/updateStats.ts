import Game from './Game'
import Snake from './Snake'

function udpateStats(game: Game, snake: Snake) {
  const lengthSpan: HTMLSpanElement = document.getElementById('snake-length')
  const scoreSpan: HTMLSpanElement = document.getElementById('game-score')
  const positionSpan: HTMLSpanElement =
    document.getElementById('snake-position')

  // update stats
  positionSpan.innerHTML = `${snake.parts[0].position.x}, ${snake.parts[0].position.y}`
  lengthSpan.innerHTML = snake.parts.length.toString()
  scoreSpan.innerHTML = game.score.toString()
}

export default udpateStats
