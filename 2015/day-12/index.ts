function add(a: number, b: number): number {
  return a + b;
}

function sum(arr: number[]): number {
  return arr.reduce(add, 0);
}

function part1(input: string): number {
  const matches = input.match(/-?\d+/g) || [];
  const mappedNumbers = matches.map(Number);
  const total = sum(mappedNumbers);

  return total;
}

export { part1 };
