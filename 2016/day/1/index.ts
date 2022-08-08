/* eslint-disable import/prefer-default-export */

function manhattanDistance(x1: number, x2: number, y1: number, y2: number): number {
  return Math.abs(x1 - x2) + Math.abs(y1 - y2);
}

function part1(instructions: string[]): number {
  const directions = [
    [0, -1],
    [1, 0],
    [0, 1],
    [-1, 0],
  ];
  const start = [0, 0];
  let currentDirection = 0;
  let destination = [0, 0];

  for (let i = 0; i < instructions.length; i += 1) {
    const instruction = instructions[i];
    const facing = instruction.slice(0, 1);
    const blocks = parseInt(instruction.slice(1), 10);

    if (facing === 'L') {
      currentDirection -= 1;
    } else {
      currentDirection += 1;
    }

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const direction = directions.at(currentDirection % directions.length)!;
    const newX = direction[0] * blocks;
    const newY = direction[1] * blocks;

    destination = [destination[0] + newX, destination[1] + newY];
  }

  return manhattanDistance(start[0], destination[0], start[1], destination[1]);
}

export { part1 };
