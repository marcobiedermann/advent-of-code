/* eslint-disable import/prefer-default-export, no-eval */

function part1(input: string[]): number {
  return input.reduce(
    (accumulator, currentValue) => accumulator + currentValue.length - eval(currentValue).length,
    0,
  );
}

export { part1 };
