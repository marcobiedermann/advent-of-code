import { readFileSync } from 'node:fs';

const input = readFileSync(`${__dirname}/input.example`, 'utf-8').split('\n');

function part1(notes: string[]) {
  const [first, second] = notes;

  const departure = parseInt(first, 10);
  const busIds = second
    .split(',')
    .filter((busId) => busId !== 'x')
    .map(Number);

  let bus = 0;
  let minWait = departure;

  busIds.forEach((busId) => {
    const diff = busId - (departure % busId);

    if (diff < minWait) {
      bus = busId;
      minWait = diff;
    }
  });

  return bus * minWait;
}

//                  295
//                  296
part1(input); // ?

// let data = require("fs").readFileSync(`${__dirname}/input`, { encoding: "utf-8" }).trim();
// let lines = data.split(/\n/);

// let requirements = lines[1]
//   .split(",")
//   .map((v, i) => (v === "x" ? false : { modulo: +v, remainder: (v - (i % v)) % v }))
//   .filter(Boolean);

// // bigger steps first

// requirements.sort(({ modulo: a }, { modulo: b }) => b - a);

// console.log(requirements);

// let val = 0;
// let step = 1;

// for (let pos = 0; pos < requirements.length; pos++) {
//   while (val % requirements[pos].modulo !== requirements[pos].remainder) val += step;
//   step *= requirements[pos].modulo;
// }

// console.log(val);

function part2() {}

// 535296695251210
part2(); //
