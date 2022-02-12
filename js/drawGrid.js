import {
  GAME_WIDTH,
  GAME_HEIGHT,
  CELL_HEIGHT,
  CELL_WIDTH,
} from "./Constants.js";

function drawGrid(ctx) {
  ctx.strokeStyle = "#000000";
  ctx.lineWidth = 1;

  ctx.beginPath();
  for (let i = 0; i <= GAME_WIDTH; i += CELL_WIDTH) {
    ctx.moveTo(i, 0);
    ctx.lineTo(i, GAME_HEIGHT);
  }
  for (let i = 0; i <= GAME_HEIGHT; i += CELL_HEIGHT) {
    ctx.moveTo(0, i);
    ctx.lineTo(GAME_WIDTH, i);
  }
  ctx.stroke();
}

export default drawGrid;
