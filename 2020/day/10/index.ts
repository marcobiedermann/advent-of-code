function subtract(a: number, b: number): number {
  return a - b;
}

function multiply(a: number, b: number): number {
  return a * b;
}

function part1(adapters: number[]): number {
  const jolts = new Map<number, number>([
    [1, 1],
    [3, 1],
  ]);
  const sortedAdapters = [...adapters].sort(subtract);

  for (let i = 1; i < sortedAdapters.length; i += 1) {
    const previous = sortedAdapters[i - 1];
    const current = sortedAdapters[i];
    const diff = current - previous;

    jolts.set(diff, (jolts.get(diff) || 0) + 1);
  }

  return multiply(jolts.get(1) || 0, jolts.get(3) || 0);
}

function part2(adapters: number[]): number {
  const sortedAdapters = [...adapters].sort(subtract);
  const arrangements = [1];

  for (let i = 0; i < sortedAdapters.length; i += 1) {
    const current = sortedAdapters[i];

    arrangements[current] =
      (arrangements[current - 3] || 0) +
      (arrangements[current - 2] || 0) +
      (arrangements[current - 1] || 0);
  }

  return arrangements[arrangements.length - 1];
}

export { part1, part2 };
