import { RADIX, sum } from '../../../utils/math';

function getArea(length: number, width: number): number {
  return length * width;
}

function getSmallestArea(...areas: number[]) {
  return Math.min(...areas);
}

function getPerimeter(a: number, b: number): number {
  return 2 * (a + b);
}

function getSmallestPerimeter(...perimeters: number[]): number {
  return Math.min(...perimeters);
}

function getVolume(length: number, width: number, height: number): number {
  return length * width * height;
}

interface Present {
  height: number;
  length: number;
  width: number;
}

function parsePresent(present: string): Present {
  const { groups } = present.match(/(?<length>\d+)x(?<width>\d+)x(?<height>\d+)/);

  if (!groups) {
    throw new Error('Invalid input');
  }

  const { height, length, width } = groups;

  return {
    height: parseInt(height, RADIX),
    length: parseInt(length, RADIX),
    width: parseInt(width, RADIX),
  };
}

function getPaper(present: Present): number {
  const { height, length, width } = present;

  const areaA = getArea(length, width);
  const areaB = getArea(width, height);
  const areaC = getArea(height, length);

  const slack = getSmallestArea(areaA, areaB, areaC);

  return 2 * areaA + 2 * areaB + 2 * areaC + slack;
}

function getRibbon(present: Present): number {
  const { height, length, width } = present;

  const perimeterA = getPerimeter(length, width);
  const perimeterB = getPerimeter(width, height);
  const perimeterC = getPerimeter(height, length);

  const ribbonPresent = getSmallestPerimeter(perimeterA, perimeterB, perimeterC);
  const ribbonBow = getVolume(length, width, height);

  return ribbonPresent + ribbonBow;
}

function part1(presents: string[]): number {
  return sum(presents.map((present) => getPaper(parsePresent(present))));
}

function part2(presents: string[]): number {
  return sum(presents.map((present) => getRibbon(parsePresent(present))));
}

export { part1, part2 };
