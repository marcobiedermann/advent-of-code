// 0 1 2 3 4 5 6 7 8 9
// 6 2 5 5 4 5 6 3 7 6

// 1478
// 2437

import { readFileSync } from 'fs';

const input = readFileSync(`${__dirname}/input`, 'utf-8').split('\n');
const sample = readFileSync(`${__dirname}/input.sample`, 'utf-8').split('\n');

interface Entry {
  signalPattern: string[];
  output: string[];
}

function parseEntry(entry: string): Entry {
  const [signalPattern, output] = entry.split(' | ');

  return {
    signalPattern: signalPattern.split(' '),
    output: output.split(' '),
  };
}

function parseEntries(entries: string[]): Entry[] {
  return entries.map(parseEntry);
}

function part1(entries: string[]): number {
  const parsedEntries = parseEntries(entries);

  return parsedEntries.reduce(
    (sum, entry) =>
      sum +
      entry.output.reduce((accumulator, currentValue) => {
        if ([2, 4, 3, 7].includes(currentValue.length)) {
          return accumulator + 1;
        }

        return accumulator;
      }, 0),
    0,
  );
}

// part1(sample); // ?
// part1(input); // ?

function part2(entries: string[]) {
  const parsedEntries = parseEntries(entries);
}

part2(sample); // ?

// https://github.com/mariotacke/advent-of-code-2021/blob/master/day-08-seven-segment-search/part2.js

// const fs = require('fs');

// const input = fs.readFileSync(`${__dirname}/input`, { encoding: 'utf-8' });

// const lines = [];
// input.split('\n').forEach((x) => {
//   const tokens = x.split(' | ');
//   lines.push({ signal: tokens[0].split(' '), output: tokens[1].split(' ') });
// });

// let sum = 0;

// for (let i = 0; i < lines.length; i++) {
//   const decodedVersion = new Array(10);
//   decodedVersion[1] = lines[i].signal.find((x) => x.length == 2);
//   decodedVersion[4] = lines[i].signal.find((x) => x.length == 4);
//   decodedVersion[7] = lines[i].signal.find((x) => x.length == 3);
//   decodedVersion[8] = lines[i].signal.find((x) => x.length == 7);
//   decodedVersion[3] = lines[i].signal.find((x) => {
//     const split = x.split('');
//     const z = decodedVersion[7].split('');
//     return split.length == 5 && split.filter((value) => !z.includes(value)).length == 2;
//   });
//   decodedVersion[5] = lines[i].signal.find((x) => {
//     const split = x.split('');
//     const z = decodedVersion[4].split('');
//     return (
//       split.length == 5 &&
//       split.filter((value) => !z.includes(value)).length == 2 &&
//       x != decodedVersion[3]
//     );
//   });
//   decodedVersion[2] = lines[i].signal.find(
//     (x) => x.length == 5 && x != decodedVersion[3] && x != decodedVersion[5],
//   );
//   decodedVersion[6] = lines[i].signal.find((x) => {
//     const split = x.split('');
//     const z = decodedVersion[1].split('');
//     return split.length == 6 && split.filter((value) => !z.includes(value)).length == 5;
//   });
//   decodedVersion[9] = lines[i].signal.find((x) => {
//     const split = x.split('');
//     const z = decodedVersion[4].split('');
//     return (
//       split.length == 6 &&
//       split.filter((value) => !z.includes(value)).length == 2 &&
//       x != decodedVersion[6]
//     );
//   });
//   decodedVersion[0] = lines[i].signal.find(
//     (x) => x.length == 6 && x != decodedVersion[6] && x != decodedVersion[9],
//   );
//   decodedVersion.forEach((x, i) => {
//     decodedVersion[i] = x.split('').sort().join('');
//   });

//   let number = '';
//   lines[i].output.forEach((x) => {
//     number += decodedVersion.indexOf(x.split('').sort().join(''));
//   });
//   sum += parseInt(number);
// }

// console.log(sum);

export { part1, part2 };
