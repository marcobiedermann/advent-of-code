import { RADIX, sum } from '../../../utils/math';

const BASE = 1000;

type Command = 'turn on' | 'turn off' | 'toggle';

interface Position {
  x: number;
  y: number;
}

interface Instruction {
  command: Command;
  start: Position;
  end: Position;
}

function getIndex(x: number, y: number): number {
  return BASE * x + y;
}

function parseInstruction(instruction: string): Instruction {
  const { groups } = instruction.match(
    /(?<command>turn on|turn off|toggle) (?<x1>\d+),(?<y1>\d+) through (?<x2>\d+),(?<y2>\d+)/,
  );
  const { command, x1, x2, y1, y2 } = groups;

  return {
    command,
    start: {
      x: parseInt(x1, RADIX),
      y: parseInt(y1, RADIX),
    },
    end: {
      x: parseInt(x2, RADIX),
      y: parseInt(y2, RADIX),
    },
  };
}

function part1(instructions: string[]): number {
  const grid = new Array(BASE ** 2).fill(false);

  instructions.forEach((instruction) => {
    const { command, start, end } = parseInstruction(instruction);

    for (let { x } = start; x <= end.x; x += 1) {
      for (let { y } = start; y <= end.y; y += 1) {
        const index = getIndex(x, y);

        switch (command) {
          case 'turn on':
            grid[index] = true;
            break;
          case 'turn off':
            grid[index] = false;
            break;
          case 'toggle':
            grid[index] = !grid[index];
            break;
          default:
            break;
        }
      }
    }
  });

  return grid.filter(Boolean).length;
}

function part2(instructions: string[]): number {
  const grid = new Array(BASE ** 2).fill(0);

  instructions.forEach((instruction) => {
    const { command, start, end } = parseInstruction(instruction);

    for (let { x } = start; x <= end.x; x += 1) {
      for (let { y } = start; y <= end.y; y += 1) {
        const index = getIndex(x, y);

        switch (command) {
          case 'turn on':
            grid[index] += 1;
            break;
          case 'turn off':
            grid[index] = Math.max(grid[index] - 1, 0);
            break;
          case 'toggle':
            grid[index] += 2;
            break;
          default:
            break;
        }
      }
    }
  });

  return sum(grid);
}

export { part1, part2 };
