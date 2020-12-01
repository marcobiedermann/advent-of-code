function part1(input: number[], target: number): number | undefined {
  const set = new Set<number>();

  for (let i = 0; i < input.length; i += 1) {
    const current = input[i];
    const diff = target - current;

    if (set.has(diff)) {
      return diff * current;
    }

    set.add(current);
  }

  return undefined;
}

function subtract(a: number, b: number): number {
  return a - b;
}

function part2(input: number[], target: number): number | undefined {
  const { length } = input;
  const sorted = [...input].sort(subtract);

  for (let i = 0; i < length - 2; i += 1) {
    let l = i + 1;
    let h = length - 1;

    while (l < h) {
      const current = sorted[i];
      const low = sorted[l];
      const high = sorted[h];

      const sum = current + low + high;

      if (sum === target) {
        return current * low * high;
      }

      if (sum > target) {
        h -= 1;
      } else {
        l += 1;
      }
    }
  }

  return undefined;
}

export { part1, part2 };
