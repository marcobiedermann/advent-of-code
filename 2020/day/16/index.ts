import { readFile } from 'node:fs';

const input = (await readFile(`${__dirname}/input`, 'utf-8')).split('\n\n');

interface Range {
  start: number;
  end: number;
}

function parseRange(range: string): Range {
  const [start, end] = range.split('-').map(Number);

  return {
    start,
    end,
  };
}

function parseRanges(ranges: string[]): Range[] {
  return ranges.map(parseRange);
}

function parseRule(rule: string) {
  return parseRanges(rule.split(': ')[1].split(' or '));
}

function parseRules(rules: string[]) {
  return rules.map(parseRule);
}

function parseNearbySeat(nearbySeat: string) {
  return parseInt(nearbySeat, 10);
}

function parseNearbySeats(nearbySeats: string[]) {
  return nearbySeats.map(parseNearbySeat);
}

function add(a: number, b: number): number {
  return a + b;
}

function sum(arr: number[]): number {
  return arr.reduce(add, 0);
}

function part1(input: string): number {
  const rules = input[0].split('\n');
  const ticket = input[1];
  const nearbySeats = input[2].split(':\n')[1].split('\n').join().split(',');

  const parsedRules = parseRules(rules);
  const parsedNearbySeats = parseNearbySeats(nearbySeats);

  const set = new Set<number>();

  parsedRules.forEach((rule) => {
    rule.forEach((range) => {
      const { start, end } = range;

      for (let i = start; i <= end; i += 1) {
        set.add(i);
      }
    });
  });

  function isInvalid(nearbySeat: number): boolean {
    return !set.has(nearbySeat);
  }

  const invalidSeats = parsedNearbySeats.filter(isInvalid);

  return sum(invalidSeats);
}

//                  28873
part1(input); // ?

// const fs = require('fs');

// const read = fs.readFileSync(`${__dirname}/input`);
// const data = read.toString().split('\n');
// const count = new Map();
// const myTicket = data
//   .slice(data.indexOf('') + 2, data.indexOf('', data.indexOf('') + 1))
//   .join('')
//   .split(',')
//   .map(Number);
// const rules = data
//   .slice(0, data.indexOf(''))
//   .map((el) => el.split(':'))
//   .map((el) => {
//     const l = el[1]
//       .split(' ')
//       .filter((el) => !isNaN(el[0]))
//       .map((el) => el.split('-').map(Number));
//     const b = new Map();
//     count.set(el[0], b);
//     return [el[0], l[0], l[1]];
//   });
// const rulesPone = rules
//   .map((el) => {
//     return [el[1], el[2]];
//   })
//   .flat();
// let tickets = data.slice(data.indexOf('') + 5).map((el) => el.split(',').map(Number));

// /// // Part one
// let pOne = 0;
// const invalid = [];
// tickets.forEach((ticket, i) => {
//   for (let k = 0; k < ticket.length; k++) {
//     let valid = false;
//     rulesPone.every((rule) => {
//       if (ticket[k] >= rule[0] && ticket[k] <= rule[1]) {
//         valid = true;
//         return false;
//       }
//       return true;
//     });
//     valid == false ? (invalid.push(i), (pOne += ticket[k])) : undefined;
//   }
// });
// console.log(`Part one = ${pOne}`);

// /// // Part two
// tickets = tickets.filter((el, i) => invalid.indexOf(i) == -1);
// tickets.push(myTicket);
// let start;
// let k;
// const done = [];

// rules.forEach((el) => {
//   tickets.forEach((ticket) => {
//     for (let k = 0; k < ticket.length; k++) {
//       if (
//         (ticket[k] >= el[1][0] && ticket[k] <= el[1][1]) ||
//         (ticket[k] >= el[2][0] && ticket[k] <= el[2][1])
//       ) {
//         const a = count.get(el[0]);
//         a.has(k) ? a.set(k, a.get(k) + 1) : a.set(k, 1);
//         count.set(el[0], a);
//       }
//     }
//   });
// });

// count.forEach((val, key, map) => {
//   const occ = [...val.entries()]
//     .filter((e) => e[1] == Math.max(...val.values()))
//     .map((el) => el[0]);
//   occ.length == 1 ? ((start = occ[0]), (k = key)) : undefined;
//   map.set(key, occ);
// });

// function recursive(map, pos, k) {
//   map.forEach((val, key, map) => {
//     key !== k
//       ? map.set(
//           key,
//           val.filter((el) => el !== pos),
//         )
//       : undefined;
//   });
//   done.push(k);
//   const single = [...map.entries()].find((el) => el[1].length == 1 && done.indexOf(el[0]) == -1);
//   if (!single) {
//     const r = tickets[tickets.length - 1];
//     return (
//       r[map.get('departure location')[0]] *
//       r[map.get('departure station')[0]] *
//       r[map.get('departure platform')[0]] *
//       r[map.get('departure track')[0]] *
//       r[map.get('departure date')[0]] *
//       r[map.get('departure time')[0]]
//     );
//   }
//   return recursive(map, single[1][0], single[0]);
// }
// console.log(`Part two = ${recursive(count, start, k)}`);
