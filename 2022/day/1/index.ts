function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

function sum(arr: number[]): number {
  return arr.reduce(add, 0);
}

function part1(elves: string[], totalElves = 1): number {
  const elvesCalories = elves.map((elf) => sum(elf.split('\n').map(Number)));
  const sortedElves = elvesCalories.sort(subtract);
  const topElves = sortedElves.slice(-totalElves);
  const total = sum(topElves);

  return total;
}

function part2(elves: string[]): number {
  return part1(elves, 3);
}

export { part1, part2 };
