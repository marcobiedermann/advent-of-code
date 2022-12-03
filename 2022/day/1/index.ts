import sortBy from 'lodash/sortBy';
import sum from 'lodash/sum';
import takeRight from 'lodash/takeRight';

function part1(elves: string[], totalElves = 1): number {
  const elvesCalories = elves.map((elf) => sum(elf.split('\n').map(Number)));
  const sortedElves = sortBy(elvesCalories);
  const topElves = takeRight(sortedElves, totalElves);
  const total = sum(topElves);

  return total;
}

function part2(elves: string[]): number {
  return part1(elves, 3);
}

export { part1, part2 };
