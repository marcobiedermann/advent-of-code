import { readFileSync } from "fs";

const input = readFileSync(`${__dirname}/input.txt`, "utf-8");

function calculateMass(mass: number) {
  return Math.floor(mass / 3) - 2;
}

function sum(accumulator: number, currentValue: number) {
  return accumulator + currentValue;
}

const totalFuel = input
  .split("\n")
  .map(mass => calculateMass(parseInt(mass, 10)))
  .reduce(sum);

totalFuel;
