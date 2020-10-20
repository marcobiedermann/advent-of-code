/* eslint-disable import/prefer-default-export */

function part1(digits: number[]): number {
  return digits.reduce((accumulator, currentValue, index) => {
    const nextValue = digits.length - 1 === index ? digits[0] : digits[index + 1];

    return currentValue === nextValue ? accumulator + currentValue : accumulator;
  }, 0);
}

export { part1 };
