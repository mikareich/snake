const defaultKeyboardConfiguration = [
  {
    keyCode: [87, 38],
    action: ({ snake }) => (snake.direction = "up"),
  },
  {
    keyCode: [83, 40],
    action: ({ snake }) => (snake.direction = "down"),
  },
  {
    keyCode: [65, 37],
    action: ({ snake }) => (snake.direction = "left"),
  },
  {
    keyCode: [68, 39],
    action: ({ snake }) => (snake.direction = "right"),
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
