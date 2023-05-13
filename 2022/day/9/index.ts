type Direction = 'D' | 'L' | 'R' | 'U';

interface Motion {
  direction: Direction;
  steps: number;
}

function parseMotion(motion: string): Motion {
  const { groups } = motion.match(/(?<direction>D|L|R|U) (?<steps>\d+)/) || [];

  if (!groups) {
    throw new Error('Invalid Input');
  }

  const { direction, steps } = groups;

  return {
    direction,
    steps: parseInt(steps, 10),
  };
}

const moves: Record<Direction, [number, number]> = {
  D: [0, -1],
  L: [-1, 0],
  R: [1, 0],
  U: [0, 1],
};

function part1(motions: string[]): number {
  let headX = 0;
  let headY = 0;

  let tailX = 0;
  let tailY = 0;

  const visited = new Set<string>([[0, 0].toString()]);

  motions.forEach((motion) => {
    const { direction, steps } = parseMotion(motion);

    for (let _ = 0; _ < steps; _ += 1) {
      headX += moves[direction][0];
      headY += moves[direction][1];

      const distX = headX - tailX;
      const distY = headY - tailY;

      if (Math.abs(distX) >= 2 || Math.abs(distY) >= 2) {
        tailX += Math.sign(distX);
        tailY += Math.sign(distY);
      }

      visited.add([tailX, tailY].toString());
    }
  });

  return visited.size;
}

function part2(motions: string[]): number {
  let headX = 0;
  let headY = 0;

  let tailX = 0;
  let tailY = 0;

  const visited = new Set<string>([[0, 0].toString()]);
  const rope = Array.from({ length: 10 }, () => [0, 0]);

  motions.forEach((motion) => {
    const { direction, steps } = parseMotion(motion);

    for (let _ = 0; _ < steps; _ += 1) {
      const [firstHeadX, firstHeadY] = rope[0];

      headX = firstHeadX;
      headY = firstHeadY;

      rope[0] = [headX + moves[direction][0], headY + moves[direction][1]];

      for (let i = 0; i < rope.length - 1; i += 1) {
        const [newHeadX, newHeadY] = rope[i];

        headX = newHeadX;
        headY = newHeadY;

        const [newTailX, newTailY] = rope[i + 1];

        tailX = newTailX;
        tailY = newTailY;

        const distX = headX - tailX;
        const distY = headY - tailY;

        if (Math.abs(distX) >= 2 || Math.abs(distY) >= 2) {
          rope[i + 1] = [tailX + Math.sign(distX), tailY + Math.sign(distY)];
        }
      }

      visited.add(rope[rope.length - 1].toString());
    }
  });

  return visited.size;
}

export { part1, part2 };
