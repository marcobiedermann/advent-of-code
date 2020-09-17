function intToDigits(int = 0): number[] {
  if (int < 10) {
    return [int];
  }

  return [...intToDigits(Math.floor(int / 10)), int % 10];
}

function filterIncreasingAndAdjacentDigits(number: number): boolean {
  const digits = intToDigits(number);
  const slicedDigits = digits.slice(0, -1);

  return (
    slicedDigits.every((digit, index) => digit <= digits[index + 1]) &&
    slicedDigits.some((digit, index) => digit === digits[index + 1])
  );
}

function part1(lower: number, upper: number): number {
  return Array.from({ length: upper - lower }, (_, index) => index + lower).filter(filterIncreasingAndAdjacentDigits)
    .length;
}

export { part1 };
