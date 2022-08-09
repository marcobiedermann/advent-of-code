function getCode(
  instructions: string[],
  buttons: (string | undefined)[][],
  start: [number, number],
) {
  const codes: (string | undefined)[] = [];

  let [x, y] = start;
  let currentButton = buttons[y][x];

  instructions.forEach((instruction) => {
    const moves = instruction.split('');

    moves.forEach((move) => {
      if (move === 'U') {
        const nextButton = buttons[y - 1]?.[x];

        y = nextButton ? y - 1 : y;
      }

      if (move === 'R') {
        const nextButton = buttons[y]?.[x + 1];

        x = nextButton ? x + 1 : x;
      }

      if (move === 'D') {
        const nextButton = buttons[y + 1]?.[x];

        y = nextButton ? y + 1 : y;
      }

      if (move === 'L') {
        const nextButton = buttons[y]?.[x - 1];

        x = nextButton ? x - 1 : x;
      }

      currentButton = buttons[y][x];
    });

    codes.push(currentButton);
  });

  return codes.join('');
}

function part1(instructions: string[]): string {
  const buttons = [
    ['1', '2', '3'],
    ['4', '5', '6'],
    ['7', '8', '9'],
  ];

  // start at `5`
  const start: [number, number] = [1, 1];

  return getCode(instructions, buttons, start);
}

function part2(instructions: string[]): string {
  const buttons = [
    [undefined, undefined, '1', undefined, undefined],
    [undefined, '2', '3', '4', undefined],
    ['5', '6', '7', '8', '9'],
    [undefined, 'A', 'B', 'C', undefined],
    [undefined, undefined, 'D', undefined, undefined],
  ];

  // start at `5`
  const start: [number, number] = [0, 2];

  return getCode(instructions, buttons, start);
}

export { part1, part2 };
