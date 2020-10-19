import { readFileSync } from 'fs';

const input = readFileSync(`${__dirname}/input`, 'utf-8');

const presents = input.split('\n');

function getArea(a: number, b: number): number {
  return a * b;
}

function getPerimeter(a: number, b: number): number {
  return 2 * (a + b);
}

function getPaper(present: number[]): number {
  const [length, width, height] = present;

  const areaA = getArea(length, width);
  const areaB = getArea(width, height);
  const areaC = getArea(height, length);

  const smallestSide = Math.min(areaA, areaB, areaC);

  return 2 * areaA + 2 * areaB + 2 * areaC + smallestSide;
}

function getRibbon(present: number[]): number {
  const [length, width, height] = present;

  const perimeterA = getPerimeter(length, width);
  const perimeterB = getPerimeter(width, height);
  const perimeterC = getPerimeter(height, length);

  const smallestPerimeter = Math.min(perimeterA, perimeterB, perimeterC);
  const volume = length * width * height;

  return smallestPerimeter + volume;
}

const mappedPresents = presents.map(present => present.split('x').map(Number));

const totalPaper = mappedPresents.reduce((accumulator, currentValue) => {
  return accumulator + getPaper(currentValue);
}, 0);

const totalRibbon = mappedPresents.reduce((accumulator, currentValue) => {
  return accumulator + getRibbon(currentValue);
}, 0);

totalPaper;
totalRibbon;
