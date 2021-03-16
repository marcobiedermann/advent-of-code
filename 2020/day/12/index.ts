function manhattanDistance(x: number, y: number) {
  return Math.abs(x) + Math.abs(y);
}

interface Instruction {
  action: string;
  value: number;
}

function parseInstruction(instruction: string): Instruction {
  const { groups } = instruction.match(/^(?<action>[EFLNRSW])(?<value>\d+)$/) || [];

  if (!groups) {
    throw new Error('Invalid input');
  }

  const { action, value } = groups;

  return {
    action,
    value: parseInt(value, 10),
  };
}

function part1(instructions: string[]): number {
  let angle = 90;
  let x = 0;
  let y = 0;

  instructions.forEach((instruction) => {
    const { action, value } = parseInstruction(instruction);

    switch (action) {
      case 'E':
        x += value;

        break;

      case 'F':
        if (angle === 0) {
          y += value;
        } else if (angle === 90) {
          x += value;
        } else if (angle === 180) {
          y -= value;
        } else if (angle === 270) {
          x -= value;
        }

        break;

      case 'L':
        angle -= value;

        if (angle < 0) {
          angle = 360 + angle;
        }

        break;

      case 'N':
        y += value;

        break;

      case 'S':
        y -= value;

        break;

      case 'R':
        angle += value;
        angle = Math.abs(angle) % 360;

        break;

      case 'W':
        x -= value;

        break;

      default:
        break;
    }
  });

  return manhattanDistance(x, y);
}

function part2(instructions: string[]): number {
  let x = 0;
  let y = 0;
  let wX = 10;
  let wY = 1;

  instructions.forEach((instruction) => {
    const { action, value } = parseInstruction(instruction);
    let angle = value / 90;

    switch (action) {
      case 'E':
        wX += value;

        break;

      case 'F':
        x += value * wX;
        y += value * wY;

        break;

      case 'L':
        while (angle > 0) {
          [wX, wY] = [wY, -wX];

          angle -= 1;
        }

        break;

      case 'N':
        wY += value;

        break;

      case 'S':
        wY -= value;

        break;

      case 'R':
        while (angle > 0) {
          [wX, wY] = [-wY, wX];

          angle -= 1;
        }

        break;

      case 'W':
        wX -= value;
        break;

      default:
        break;
    }
  });

  return manhattanDistance(x, y);
}

export { part1, part2 };
