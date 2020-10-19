import { readFileSync } from 'fs';

const input = readFileSync(`${__dirname}/input`, 'utf-8');

const parentheses = [...input];

const floor = parentheses.reduce((accumulator, currentValue, index) => {
  const floor = currentValue === '(' ? accumulator + 1 : accumulator - 1;

  if (floor === -1) {
    console.log('Enter Basement at position: ', index + 1);
  }

  return floor;
}, 0);

floor;
