import { GAME_WIDTH, GAME_HEIGHT } from "./Constants.js";
import drawGrid from "./drawGrid.js";
import KeyboardHandler from "./KeyboardHandler.js";
import Game from "./Game.js";
import Snake from "./Snake.js";
import Apple from "./Apple.js";
import udpateStats from "./updateStats.js";

// ** INITIALIZE ** //
const gameScreen = document.getElementById("game-screen");
const ctx = gameScreen.getContext("2d");

gameScreen.width = GAME_WIDTH;
gameScreen.height = GAME_HEIGHT;

const game = new Game(GAME_WIDTH, GAME_HEIGHT, ctx);

const snake = new Snake({ x: 0, y: 0 }, 10);
game.gameObjects.push(snake);

const apple = new Apple({ x: 5, y: 3 });
game.gameObjects.push(apple);

KeyboardHandler({ snake, game });

// ** GAMELOOP ** //
let lastTimestamp = 0;
function gameloop(passedTime) {
  const deltaTime = passedTime - lastTimestamp;

  if (deltaTime >= 1000 / game.tickSpeed) {
    lastTimestamp = passedTime;

    // process game logic
    game.renderer.clearScreen();
    game.draw();
    game.update(deltaTime);

    drawGrid(ctx);
  }

  udpateStats(game, snake);

  window.requestAnimationFrame(gameloop);
}

gameloop();
