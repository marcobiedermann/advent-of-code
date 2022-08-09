/* eslint-disable import/prefer-default-export */

const buttons = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

function part1(instructions: string[]): string {
  const codes: number[] = [];

  // start in the middle (`5`)
  let x = Math.floor(buttons.length / 2);
  let y = Math.floor(buttons.length / 2);
  let currentButton = buttons[y][x];

  instructions.forEach((instruction) => {
    const moves = instruction.split('');

    moves.forEach((move) => {
      if (move === 'U') {
        y = Math.max(y - 1, 0);
      }

      if (move === 'R') {
        x = Math.min(x + 1, buttons.length - 1);
      }

      if (move === 'D') {
        y = Math.min(y + 1, buttons.length - 1);
      }

      if (move === 'L') {
        x = Math.max(x - 1, 0);
      }

      currentButton = buttons[y][x];
    });

    codes.push(currentButton);
  });

  return codes.join('');
}

export { part1 };
