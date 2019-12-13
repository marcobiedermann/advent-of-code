import { readFileSync } from "fs";

const input = readFileSync("./input.txt", "utf-8");

function calculateMass(mass: number) {
  return Math.floor(mass / 3) - 2;
}

function sum(accumulator: number, currentValue: number) {
  return accumulator + currentValue;
}

const totalFuel = input
  .split("\n")
  .map(input => parseInt(input, 10))
  .map(calculateMass)
  .reduce(sum);

totalFuel;
