interface KeyboardConfiguration {
  keyCode: number[]
  action: (instances: any) => void
}

const defaultKeyboardConfiguration: KeyboardConfiguration[] = [
  {
    keyCode: [87, 38],
    action: ({ snake, game }) =>
      game.state === 'running' && snake.changeDirection('up'),
  },
  {
    keyCode: [83, 40],
    action: ({ snake, game }) =>
      game.state === 'running' && snake.changeDirection('down'),
  },
  {
    keyCode: [65, 37],
    action: ({ snake, game }) =>
      game.state === 'running' && snake.changeDirection('left'),
  },
  {
    keyCode: [68, 39],
    action: ({ snake, game }) =>
      game.state === 'running' && snake.changeDirection('right'),
  },
  {
    keyCode: [32],
    action: ({ game }) => game.togglePause(),
  },
]

function KeyboardHandler(
  instances: any,
  keyboardConfig = defaultKeyboardConfiguration
) {
  window.addEventListener('keydown', (event) => {
    const { which } = event

    keyboardConfig.forEach((config) => {
      const { keyCode, action } = config

      if (keyCode.includes(which)) action(instances)
    })
  })
}

export default KeyboardHandler
