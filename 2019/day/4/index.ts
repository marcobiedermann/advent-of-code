function isIncreasing(number: string): boolean {
  for (let i = 0; i < number.length - 1; i += 1) {
    const current = number[i];
    const next = number[i + 1];

    if (current > next) {
      return false;
    }
  }

  return true;
}

function isAdjacent(number: string): boolean {
  let result = false;

  for (let i = 0; i < number.length - 1; i += 1) {
    const current = number[i];
    const next = number[i + 1];

    if (current === next) {
      result = true;
    }
  }

  return result;
}

function countLetters(input: string): Map<string, number> {
  const map = new Map<string, number>();

  for (let i = 0; i < input.length; i += 1) {
    const current = input[i];

    map.set(current, (map.get(current) || 0) + 1);
  }

  return map;
}

function find(map: Map<string, number>): boolean {
  return !![...map].find(([, value]) => {
    return value === 2;
  });
}

function isIncreasingAndAdjacent(number: string): boolean {
  return isIncreasing(number) && isAdjacent(number);
}

function isIncreasingAndStrictAdjacent(number: string): boolean {
  return isIncreasing(number) && find(countLetters(number));
}

function generateInput(lower: number, upper: number): string[] {
  return Array.from(
    {
      length: upper - lower,
    },
    (_, index) => (index + lower).toString(),
  );
}

function part1(lower: number, upper = lower + 1): number {
  return generateInput(lower, upper).filter(isIncreasingAndAdjacent).length;
}

function part2(lower: number, upper = lower + 1): number {
  return generateInput(lower, upper).filter(isIncreasingAndStrictAdjacent).length;
}

export { part1, part2 };
