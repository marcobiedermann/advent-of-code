import chunk from 'lodash/chunk';
import sum from 'lodash/sum';

function isLowerCase(character: string): boolean {
  return character.toLocaleLowerCase() === character;
}

function part1(rucksacks: string[]): number {
  return sum(
    rucksacks.map((rucksack) => {
      const firstCompartment = rucksack.slice(0, rucksack.length / 2);
      const secondCompartment = rucksack.slice(rucksack.length / 2);
      const duplicatedItem = firstCompartment
        .split('')
        .find((item) => secondCompartment.includes(item));

      if (!duplicatedItem) {
        throw new Error('Invalid input');
      }

      const priority = isLowerCase(duplicatedItem)
        ? duplicatedItem.charCodeAt(0) - 'a'.charCodeAt(0) + 1
        : duplicatedItem.charCodeAt(0) - 'A'.charCodeAt(0) + 1 + 26;

      return priority;
    }),
  );
}

function part2(rucksacks: string[]): number {
  const groups = chunk(rucksacks, 3);

  return sum(
    groups.map((group) => {
      const [firstRucksack, ...rest] = group;

      const duplicatedItem = firstRucksack
        .split('')
        .find((item) => rest.every((rucksack) => rucksack.includes(item)));

      if (!duplicatedItem) {
        throw new Error('Invalid input');
      }

      const priority = isLowerCase(duplicatedItem)
        ? duplicatedItem.charCodeAt(0) - 'a'.charCodeAt(0) + 1
        : duplicatedItem.charCodeAt(0) - 'A'.charCodeAt(0) + 1 + 26;

      return priority;
    }),
  );
}

export { part1, part2 };
