import { readFileSync } from 'fs';

const input = readFileSync(`${__dirname}/input`, 'utf-8').split(',').map(Number);
const sampleInput = [16, 1, 2, 0, 4, 2, 7, 1, 2, 14];

function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number) {
  return a - b;
}

function sum(arr: number[]): number {
  return arr.reduce(add, 0);
}

function median(arr: number[]): number {
  const sortedArr = [...arr].sort(subtract);
  const middle = Math.floor(arr.length / 2);

  return sortedArr[middle];
}

function mean(arr: number[]): number {
  return sum(arr) / arr.length;
}

function triangularNumber(n: number) {
  return (n * (n + 1)) / 2;
}

function part1(positions: number[]): number {
  const m = median(positions);

  return positions.reduce((accumulator, position) => {
    const dx = Math.abs(position - m);

    return accumulator + dx;
  }, 0);
}

function part2(positions: number[]): number {
  const m = Math.floor(mean(positions));

  return positions.reduce((accumulator, position) => {
    const dx = Math.abs(position - m);

    return accumulator + triangularNumber(dx);
  }, 0);
}

part2(sampleInput); // ?

export { part1, part2 };
