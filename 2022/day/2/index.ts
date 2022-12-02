function add(a: number, b: number): number {
  return a + b;
}

function sum(arr: number[]): number {
  return arr.reduce(add, 0);
}

const shapes: Record<string, number> = {
  A: 1,
  B: 2,
  C: 3,
  X: 1,
  Y: 2,
  Z: 3,
};

function part1(rounds: string[]): number {
  const mappedRounds = rounds.map((round) => {
    const [leftShape, rightShape] = round.split(' ');
    const left = shapes[leftShape];
    const right = shapes[rightShape];
    const diff = Math.abs(left - right);

    if (left === right) {
      return right + 3;
    }

    if ((diff === 1 && right > left) || (right === 1 && left === 3)) {
      return right + 6;
    }

    return right;
  });

  return sum(mappedRounds);
}

function part2(rounds: string[]): number {
  const mappedRounds = rounds.map((round) => {
    const [leftShape, rightShape] = round.split(' ');
    const left = shapes[leftShape];

    if (rightShape === 'X') {
      return left - 1 || 3;
    }

    if (rightShape === 'Y') {
      return left + 3;
    }

    return ((left + 1) % 3 || 3) + 6;
  });

  return sum(mappedRounds);
}

export { part1, part2 };
