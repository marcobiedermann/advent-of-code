// https://github.com/mariotacke/advent-of-code-2021/blob/master/day-13-transparent-origami/part1.js

import { readFileSync } from 'fs';

const input = readFileSync(`${__dirname}/input`, 'utf-8');
const sampleInput = readFileSync(`${__dirname}/input.sample`, 'utf-8');

function parseInput(input: string) {
  const [coordinates, folds] = input.split('\n\n');

  return {
    coordinates: coordinates.split('\n').map((coordinate) => coordinate.split(',').map(Number)),
  };
}

function makeGrid(coordinates: number[][]): string[][] {
  const width = Math.max(...coordinates.map(([x]) => x)) + 1;
  const height = Math.max(...coordinates.map(([, y]) => y)) + 1;

  const grid = Array.from<string>({ length: height }).map(() =>
    Array.from<string>({ length: width }).fill('.'),
  );

  coordinates.forEach(([x, y]) => {
    grid[y][x] = '#';
  });

  return grid;
}

function foldUp(grid: string[][], position: number) {
  const upperHalf = grid.slice(0, position);
  const lowerHalf = grid.slice(position + 1);

  lowerHalf.reverse(); // ?
}

function foldLeft(grid: string[][], position: number) {}

function countDots(grid: string[][]): number {
  return grid.flat().reduce((total, dot) => (dot === '#' ? total : total + 1), 0);
}

function part1(input: string): number {
  const { coordinates } = parseInput(input);
  const grid = makeGrid(coordinates);
  foldUp(grid, 7);
  const total = countDots(grid);

  return total;
}

part1(sampleInput); // ?

// export const foldedSet = (coordslist, instrlist) =>
//   instrlist
//     .map((v) => v.substring('fold along '.length).split('='))
//     .map(([d, v]) => [d === 'x' ? 0 : 1, Number(v)])
//     .reduce(
//       (c, [fold, value]) =>
//         c.map((xy) => ((xy[fold] = value > xy[fold] ? xy[fold] : value - (xy[fold] - value)), xy)),
//       coordslist.map((row) => row.split(',').map(Number)),
//     )
//     .reduce((set, coord) => set.add(coord.join()), new Set());

// const splitInput = (input) => input.split('\n\n').map((group) => group.split('\n'));

// export const part1 = (input) =>
//   (([coordslist, instrlist]) => foldedSet(coordslist, instrlist.slice(0, 1)).size)(
//     splitInput(input),
//   );

// export const part2 = (input) =>
//   (([coordslist, instrList]) => {
//     const coords = [...foldedSet(coordslist, instrList)].map((c) => c.split(',').map(Number));
//     const [maxX, maxY] = [0, 1].map((v) => Math.max(...coords.map((xy) => xy[v])));
//     return [...Array(maxY + 1)]
//       .map((_, y) =>
//         [...Array(maxX + 1)].map((_, x) =>
//           coords.some(([cx, cy]) => cx === x && cy === y) ? '#' : ' ',
//         ),
//       )
//       .map((row) => row.join(''))
//       .join('\n');
//   })(splitInput(input));
