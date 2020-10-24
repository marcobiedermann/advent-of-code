function getArea(a: number, b: number): number {
  return a * b;
}

function getPerimeter(a: number, b: number): number {
  return 2 * (a + b);
}

function getPaper(present: number[]): number {
  const [length, width, height] = present;

  const areaA = getArea(length, width);
  const areaB = getArea(width, height);
  const areaC = getArea(height, length);

  const smallestSide = Math.min(areaA, areaB, areaC);

  return 2 * areaA + 2 * areaB + 2 * areaC + smallestSide;
}

function getRibbon(present: number[]): number {
  const [length, width, height] = present;

  const perimeterA = getPerimeter(length, width);
  const perimeterB = getPerimeter(width, height);
  const perimeterC = getPerimeter(height, length);

  const smallestPerimeter = Math.min(perimeterA, perimeterB, perimeterC);
  const volume = length * width * height;

  return smallestPerimeter + volume;
}

function parsePresents(presents: string[]): number[][] {
  return presents.map((present) => present.split('x').map(Number));
}

function part1(input: string[]): number {
  return parsePresents(input).reduce(
    (accumulator, currentValue) => accumulator + getPaper(currentValue),
    0,
  );
}

function part2(input: string[]): number {
  return parsePresents(input).reduce(
    (accumulator, currentValue) => accumulator + getRibbon(currentValue),
    0,
  );
}

export { part1, part2 };
