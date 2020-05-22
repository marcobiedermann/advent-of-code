function part1(instructions: number[]): number {
  const { length } = instructions;
  let result = 0;

  for (let i = 0; i < length; i += 1) {
    const current = instructions[i];

    result += current;
  }

  return result;
}

function part2(instructions: number[]): number {
  const { length } = instructions;
  const set = new Set();
  let result = 0;

  while (true) {
    for (let i = 0; i < length; i += 1) {
      const current = instructions[i];

      result += current;

      if (set.has(result)) {
        return result;
      }

      set.add(result);
    }
  }
}

export { part1, part2 };
