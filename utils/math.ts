const RADIX = 10 as const;

function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

function sum(arr: number[]): number {
  return arr.reduce(add, 0);
}

export { RADIX, add, subtract, sum };
