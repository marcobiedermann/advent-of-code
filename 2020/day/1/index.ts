/* eslint-disable import/prefer-default-export, no-eval */

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

export { part1 };
