const whenRunning = (game, cb) => {
  if (game.state === "running") cb();
};

const defaultKeyboardConfiguration = [
  {
    keyCode: [87, 38],
    action: ({ snake, game }) =>
      whenRunning(game, () => (snake.direction = "up")),
  },
  {
    keyCode: [83, 40],
    action: ({ snake, game }) =>
      whenRunning(game, () => (snake.direction = "down")),
  },
  {
    keyCode: [65, 37],
    action: ({ snake, game }) =>
      whenRunning(game, () => (snake.direction = "left")),
  },
  {
    keyCode: [68, 39],
    action: ({ snake, game }) =>
      whenRunning(game, () => (snake.direction = "right")),
  },
  {
    keyCode: [32],
    action: ({ game }) => game.togglePause(),
  },
];

function KeyboardHandler(
  instances,
  keyboardConfig = defaultKeyboardConfiguration
) {
  window.addEventListener("keydown", (event) => {
    const { which } = event;

    keyboardConfig.forEach((config) => {
      const { keyCode, action } = config;

      if (keyCode.includes(which)) action(instances);
    });
  });
}

export default KeyboardHandler;
