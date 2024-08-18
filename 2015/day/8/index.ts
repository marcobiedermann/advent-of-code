import { sum } from '../../../utils/math';

function mapString(str: string): number {
  const { length: totalCharacters } = str;
  const { length: totalCharactersInMemory } = eval(str);

  return totalCharacters - totalCharactersInMemory;
}

function mapStrings(strs: string[]): number[] {
  return strs.map(mapString);
}

function part1(input: string[]): number {
  return sum(mapStrings(input));
}

export { part1 };
