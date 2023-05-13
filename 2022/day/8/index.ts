// https://gist.github.com/bluepichu/3b342f69d0ecd5f9cd968d3739c17483/revisions

import { readFileSync } from 'node:fs';

let input = readFileSync(`${__dirname}/input.sample`, 'utf-8')
  .split('\n')
  .map((row) => row.split('').map(Number));

console.table(input);

function part1(grid: number[][]) {
  const height = grid.length;
  const width = grid[0].length;
  let total = 0;

  for (let y = 1; y < height - 1; y += 1) {
    for (let x = 1; x < width - 1; x += 1) {
      const cell = grid[y][x];

      // down
      for (let k = y + 1; k < height; k += 1) {
        const cellDown = grid[k][x];

        if (cellDown >= cell) {
          break;
        }
      }

      // right
      for (let k = x + 1; k < width; k += 1) {
        const cellRight = grid[y][k];

        if (cellRight >= cell) {
          break;
        }
      }
    }
  }

  total;
}

part1(input);

// function part1(data: number[][]): number {
//   const height = data.length;
//   const width = data[0].length

//   let total = (2 * height) + (2 * width) - 4;

//   for (let i = 1; i < data.length - 1; i += 1) {
//     for (let j = 1; j < data[i].length - 1; j += 1) {
//       const currentCell = data[i][j]

//       // check up

//       // check right
//       for (let k = j + 1; k < data[i].length; k += 1) {
//         const rightCell = data[i][k]

//         console.log({ currentCell, rightCell })

//         if (rightCell >= currentCell) {
//           // break;
//         }
//       }

//       // check down

//       // check left
//     }
//   }

//   return total
// }

// const res = part1(input)

// res

// function part2(datastreamBuffer: string): number {

// }

// export { part1, part2 };
