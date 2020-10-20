/* eslint-disable import/prefer-default-export */

function part1(input: string[]): number {
  return input.reduce((accumulator, currentValue, index) => {
    const floor = currentValue === '(' ? accumulator + 1 : accumulator - 1;

    if (floor === -1) {
      console.log('Enter Basement at position: ', index + 1);
    }

    return floor;
  }, 0);
}
export { part1 };
