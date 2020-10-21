/* eslint-disable import/prefer-default-export */

interface Instruction {
  command: string;
  x1: number;
  x2: number;
  y1: number;
  y2: number;
}

function parseInstruction(instruction: string): Instruction {
  const { groups } =
    instruction.match(
      /(?<command>turn on|turn off|toggle) (?<x1>\d+),(?<y1>\d+) through (?<x2>\d+),(?<y2>\d+)/,
    ) || [];

  if (!groups) {
    return {
      command: 'Unknown command',
      x1: 0,
      x2: 0,
      y1: 0,
      y2: 0,
    };
  }

  const { command, x1, x2, y1, y2 } = groups;

  return {
    command,
    x1: parseInt(x1, 10),
    x2: parseInt(x2, 10),
    y1: parseInt(y1, 10),
    y2: parseInt(y2, 10),
  };
}

function part1(instructions: string[]): number {
  const base = 1000;
  const lights = new Uint8Array(base ** 2);

  instructions.forEach((instruction) => {
    const { command, x1, x2, y1, y2 } = parseInstruction(instruction);

    for (let x = x1; x <= x2; x += 1) {
      for (let y = y1; y <= y2; y += 1) {
        const index = base * x + y;

        switch (command) {
          case 'turn on':
            lights[index] = 1;
            break;

          case 'turn off':
            lights[index] = 0;
            break;

          case 'toggle':
            lights[index] = lights[index] === 0 ? 1 : 0;
            break;

          default:
            break;
        }
      }
    }
  });

  const result = lights.filter(Boolean);

  return result.length;
}

export { part1 };
