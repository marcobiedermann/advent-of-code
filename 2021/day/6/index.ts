import { readFileSync } from 'fs';

const sample = [3, 4, 3, 1, 2];

const input = readFileSync(`${__dirname}/input`, 'utf-8').split(',').map(Number);

function add(a: number, b: number): number {
  return a + b;
}

function sum(arr: number[]): number {
  return arr.reduce((accumulator, currentValue) => add(accumulator, currentValue), 0);
}

function getPopulationSize(initialFish: number[], days: number): number {
  // The breeding calendar is a circular list, so its length needs to be at
  // least as long as a baby fish's breeding time. This ensures that entries
  // wrap around properly when added to the calendar.
  const calendar = new Array(9).fill(0);

  initialFish.forEach((fish) => (calendar[fish] += 1));

  for (let i = 0; i < days; i += 1) {
    const today = i % calendar.length;
    const breeders = calendar[today];
    // New babies breed in 9 days.
    calendar[(today + 9) % calendar.length] += breeders;
    // Adults breed again in 7 days.
    calendar[(today + 7) % calendar.length] += breeders;
    calendar[today] -= breeders;
  }

  return sum(calendar);
}

function part1(input: number[]): number {
  return getPopulationSize(input, 80);
}

function part2(input: number[]): number {
  return getPopulationSize(input, 256);
}

part1(sample); // ?
// part2(input); // ?

export { part1, part2 };
