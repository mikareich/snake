import { GAME_WIDTH, GAME_HEIGHT } from "./Constants.js";
import drawGrid from "./drawGrid.js";
import KeyboardHandler from "./KeyboardHandler.js";
import Game from "./Game.js";
import Snake from "./Snake.js";

// ** INITIALIZE ** //
const gameScreen = document.getElementById("gameScreen");
const ctx = gameScreen.getContext("2d");

gameScreen.width = GAME_WIDTH;
gameScreen.height = GAME_HEIGHT;

const snake = new Snake({ x: 0, y: 0 }, 3);
const game = new Game(GAME_WIDTH, GAME_HEIGHT, ctx);
game.gameObjects.push(snake);

KeyboardHandler({ snake });

// ** GAMELOOP ** //
let lastTimestamp = 0;
function gameloop(passedTime) {
  const deltaTime = passedTime - lastTimestamp;

  if (deltaTime >= game.tickSpeed) {
    lastTimestamp = passedTime;

    // process game logic
    game.renderer.clearScreen();
    game.draw();
    game.update();

    drawGrid(ctx);
  }

  game.tickSpeedMultiplier = 1 + passedTime / 20000; // increase speed by 5% every second

  window.requestAnimationFrame(gameloop);
}

gameloop();
