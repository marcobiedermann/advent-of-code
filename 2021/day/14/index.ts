import { readFileSync } from 'fs';

const input = readFileSync(`${__dirname}/input`, 'utf-8');
const sample = readFileSync(`${__dirname}/input.sample`, 'utf-8');

function mutate(polymerTemplate, rules) {
  let sequence = '';

  sequence += polymerTemplate[0];

  for (let i = 1; i < polymerTemplate.length; i += 1) {
    const pair = polymerTemplate.substr(i - 1, 2);
    const rule = rules.get(pair);

    sequence += rule;
    sequence += polymerTemplate[i];
  }

  return sequence;
}

function part1(input: string): number {
  const [polymerTemplate, pairInsertionRules] = input.split('\n\n');

  const parsedPairs = pairInsertionRules.split('\n').map((rule) => rule.split(' -> '));

  const rules = new Map<string, string>(parsedPairs);

  let poly = polymerTemplate;
  const steps = 10;

  for (let i = 0; i < steps; i += 1) {
    poly = mutate(poly, rules);
  }

  const count = new Map<string, number>();

  for (let i = 0; i < poly.length; i += 1) {
    const char = poly[i];

    count.set(char, (count.get(char) || 0) + 1);
  }

  const min = Math.min(...count.values()); // ?
  const max = Math.max(...count.values()); // ?

  return max - min;
}

part1(input); // ?

// const data = require('fs').readFileSync(`${__dirname}/input`, { encoding: 'utf-8' }).trim();

// const groups = data.split(/\n{2,}/);

// let poly = groups[0];
// const rules = {};

// for (const r of groups[1].split(/\n/)) rules[r.substr(0, 2)] = r.substr(-1);

// function mutate(src) {
//   let next = src[0];
//   for (let i = 1; i < src.length; i++) {
//     const pair = src.substr(i - 1, 2);
//     if (rules[pair] != null) next += rules[pair];
//     next += src[i];
//   }
//   return next;
// }

// for (let i = 0; i < 10; i++) poly = mutate(poly);

// const counts = {};
// for (const c of poly) counts[c] = (counts[c] ?? 0) + 1;

// const s = Object.values(counts).sort((a, b) => a - b);
// console.log(s[s.length - 1] - s[0]);

// let data = require("fs").readFileSync(`${__dirname}/input`, { encoding: "utf-8" }).trim();
// let groups = data.split(/\n{2,}/);

// let poly = groups[0];
// let rules = {};

// // count added elements by applying rules to all possible pairings
// // [step: {pair: {element: amountAdded, ...}, ...}, ...]
// let ruleCounts = [{}];

// for (const r of groups[1].split(/\n/)) {
//   rules[r.substr(0, 2)] = r.substr(-1);
//   ruleCounts[0][r.substr(0, 2)] = { [r.substr(-1)]: 1 };
// }

// // {a:1, b:2} + {b:1, c:1} = {a:1, b:3, c:1}
// function sum(a, b) {
//   let res = {};
//   new Set([...Object.keys(a), ...Object.keys(b)]).forEach((k) => {
//     res[k] = (a[k] ?? 0) + (b[k] ?? 0);
//   });
//   return res;
// }

// // ABCD => [AB, BC, CD]
// const polyPairs = [];
// for (let i = 0; i < poly.length - 1; i++) polyPairs.push(poly.substr(i, 2));

// // calculate consecutive steps by adding elements to previous steps and summing previous counts
// for (let i = 1; i < 40; i++) {
//   ruleCounts[i] = {};
//   Object.keys(ruleCounts[0]).forEach((pair) => {
//     let added = rules[pair];
//     let p1 = pair[0] + added;
//     let p2 = added + pair[1];
//     ruleCounts[i][pair] = sum(ruleCounts[i - 1][p1], ruleCounts[i - 1][p2]);
//   });
// }

// // result = sum of elements of all the steps up to 40 from pairs + elements of original sequence
// let counts = {};
// for (const pair of polyPairs) for (let i = 0; i < 40; i++) counts = sum(counts, ruleCounts[i][pair]);
// for (const c of poly) counts[c]++;

// // find min max
// let s = Object.values(counts).sort((a, b) => a - b);
// console.log(s[s.length - 1] - s[0]);
