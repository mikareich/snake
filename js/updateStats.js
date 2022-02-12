function udpateStats(game, snake) {
  const snakePositionSpan = document.getElementById("snake-position");
  const snakeLengthSpan = document.getElementById("snake-length");
  const gameScoreSpan = document.getElementById("game-score");

  // update stats
  snakePositionSpan.innerHTML = `${snake.parts[0].position.x}, ${snake.parts[0].position.y}`;
  snakeLengthSpan.innerHTML = snake.parts.length;
  gameScoreSpan.innerHTML = game.score;
}

export default udpateStats;
