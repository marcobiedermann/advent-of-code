import { readFileSync } from 'node:fs';

const input = readFileSync(`${__dirname}/input.example`, 'utf-8').split('\n');

function parseMask(line: string) {
  const { groups } = line.match(/^mask = (?<mask>\w+)$/) || [];

  if (!groups) {
    throw new Error('Invalid input');
  }

  const { mask } = groups;

  return mask.replace(/x/gi, '0');
}

function parseValue(line: string) {
  const { groups } = line.match(/mem\[(?<address>\d+)\] = (?<value>\d+)/) || [];

  if (!groups) {
    throw new Error('Invalid input');
  }

  const { address, value } = groups;

  return {
    address: parseInt(address, 10),
    value: parseInt(value, 10),
  };
}

function add(a: number, b: number): number {
  return a + b;
}

function sum(arr: number[]) {
  return arr.reduce(add);
}

function part1(): number {
  const memory = new Map<number, number>();

  return sum(Array.from(memory.values()));
}

part1(input); // ?

function part2() {}

export { part1, part2 };

// let data = require("fs").readFileSync(`${__dirname}/input`, { encoding: "utf-8" }).trim();
// let lines = data.split(/\n/);

// const re1 = /^mask.=.(\w+)$/;
// const re2 = /^mem\[(\d+)\].=.(\d+)$/;
// let memory = {};
// let maskAnd, maskOr;

// lines.forEach((line) => {
//   let m1 = re1.exec(line);
//   if (m1) {
//     maskAnd = BigInt(parseInt([...m1[1]].map((x) => (x === "X" || x === "1" ? "1" : "0")).join(""), 2));
//     maskOr = BigInt(parseInt([...m1[1]].map((x) => (x === "X" || x === "0" ? "0" : "1")).join(""), 2));
//   } else {
//     let m2 = re2.exec(line);
//     let addr = m2[1];
//     let v = BigInt(m2[2]);
//     memory[addr] = (v & maskAnd) | maskOr;
//   }
// });

// const sum = Object.values(memory).reduce((a, v) => a + v, 0n);

// // 12135523360904
// console.log(sum.toString());

// let data = require("fs").readFileSync(`${__dirname}/input`, { encoding: "utf-8" }).trim();
// let lines = data.split(/\n/);

// const re1 = /^mask.=.(\w+)$/;
// const re2 = /^mem\[(\d+)\].=.(\d+)$/;
// let memory = {};
// let mask;

// function shiftify(values) {
//   return values.map((v) => v << 1n);
// }

// function oneify(values) {
//   return values.map((v) => v | 1n);
// }

// lines.forEach((line) => {
//   let m1 = re1.exec(line);
//   if (m1) {
//     mask = m1[1];
//   } else {
//     let m2 = re2.exec(line);
//     let base = Number(m2[1]).toString(2).padStart(36, "0");
//     let v = BigInt(m2[2]);

//     let addresses = [0n];
//     [...mask].forEach((digit, index) => {
//       addresses = shiftify(addresses);
//       if (digit === "X") {
//         addresses = [...addresses, ...oneify(addresses)];
//       } else if (digit === "1" || base[index] === "1") {
//         addresses = oneify(addresses);
//       }
//     });
//     addresses.forEach((a) => {
//       memory[a] = v;
//     });
//   }
// });

// const sum = Object.values(memory).reduce((a, v) => a + v, 0n);

// // 2741969047858
// console.log(sum.toString());
