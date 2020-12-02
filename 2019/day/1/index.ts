function calculateFuel(mass: number): number {
  return Math.floor(mass / 3) - 2;
}

function calculateAdditionalFuel(input: number): number {
  const fuel = calculateFuel(input);

  if (fuel < 0) {
    return input;
  }

  return input + calculateAdditionalFuel(fuel);
}

function part1(input: number[]): number {
  return input.reduce((accumulator, currentValue) => accumulator + calculateFuel(currentValue), 0);
}

function part2(input: number[]): number {
  return input.reduce(
    (accumulator, currentValue) =>
      accumulator + calculateAdditionalFuel(calculateFuel(currentValue)),
    0,
  );
}

export { part1, part2 };
