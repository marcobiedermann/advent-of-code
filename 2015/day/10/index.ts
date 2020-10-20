function processInput(input: string): string {
  return (input.match(/(\d)\1*/g) || []).reduce((accumulator, currentValue) => {
    const { length } = currentValue;
    const [value] = currentValue;

    return `${accumulator}${length}${value}`;
  }, '');
}

function part1(input: string, iterations = 40): number {
  let result = input;

  for (let i = 0; i < iterations; i += 1) {
    result = processInput(result);
  }

  return result.length;
}

function part2(input: string, iterations = 50): number {
  return part1(input, iterations);
}

export { part1, part2 };
