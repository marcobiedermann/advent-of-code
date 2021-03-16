// https://github.com/caderek/aoc2020/blob/main/src/day17/index.ts

import { readFileSync } from 'fs';

const input = readFileSync(`${__dirname}/input.example`, 'utf-8')
  .split('\n')
  .map((line) => line.split(''));

function countNeighbors(input, x, y, z): number {}

function isActive(cube: string): boolean {
  return cube === '#';
}

function part1(input: string[][]): number {
  // for (let i = 0; i < 6; i += 1) {
  for (let z = 0; z < input.length; z += 1) {
    for (let y = 0; y < input[0].length; y += 1) {
      for (let x = 0; x < input[0][0].length; x += 1) {
        const cube = input[z][y][x];
        const neighbors = countNeighbors(input, x, y, z);

        if (isActive(cube) && (neighbors === 2 || neighbors === 3)) {
          // set active
        } else if (neighbors === 3) {
          // set active
        } else {
          // set inactive
        }
      }
    }
  }
  // }
}

function part2(input: string[][]): number {}

part1(input);

export { part1, part2 };

function countAround(x, y, z, w, map, isPart2) {
  let count = 0;
  for (let ww = isPart2 ? w - 1 : 0; ww <= (isPart2 ? w + 1 : 0); ww++) {
    for (let zz = z - 1; zz <= z + 1; zz++) {
      for (let yy = y - 1; yy <= y + 1; yy++) {
        for (let xx = x - 1; xx <= x + 1; xx++) {
          if ((xx !== x || yy !== y || zz !== z || ww !== w) && map[`${xx},${yy},${zz},${ww}`]) {
            count++;
          }
        }
      }
    }
  }
  return count;
}

function solve(input, isPart2) {
  let map = {};
  for (let y = 0; y < input.length; y++) {
    for (let x = 0; x < input[0].length; x++) {
      if (input[y][x] === '#') {
        map[`${x},${y},0,0`] = true;
      }
    }
  }
  const height = [0, input.length];
  const width = [0, input[0].length];
  const depth = [0, 1];
  const hyper = [0, 1];
  for (let t = 0; t < 6; t++) {
    const newMap = {};
    depth[0]--;
    depth[1]++;
    width[0]--;
    width[1]++;
    height[0]--;
    height[1]++;
    if (isPart2) {
      hyper[0]--;
      hyper[1]++;
    }
    for (let w = hyper[0]; w < hyper[1]; w++) {
      for (let z = depth[0]; z < depth[1]; z++) {
        for (let y = width[0]; y < width[1]; y++) {
          for (let x = height[0]; x < height[1]; x++) {
            const neigh = countAround(x, y, z, w, map, isPart2);
            const isActive = map[`${x},${y},${z},${w}`];
            if (neigh === 3 || (neigh === 2 && isActive)) {
              newMap[`${x},${y},${z},${w}`] = true;
            }
          }
        }
      }
    }

    map = newMap;
  }
  return Object.keys(map).length;
}

// 313
// console.log('Part 1', solve(input, false));
// 2640
// console.log('Part 2', solve(input, true));
