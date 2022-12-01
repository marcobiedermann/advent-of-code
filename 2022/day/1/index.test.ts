import { readFileSync } from 'node:fs';
import { part1, part2 } from '.';

const sample = readFileSync(`${__dirname}/input.sample`, 'utf-8').split('\n\n');
const input = readFileSync(`${__dirname}/input`, 'utf-8').split('\n\n');

describe('Day 1', () => {
  describe('Part 1', () => {
    it('should find the elf carrying the most calories', () => {
      expect.assertions(2);

      expect(part1(sample)).toStrictEqual(24000);
      expect(part1(input)).toStrictEqual(71502);
    });
  });

  describe('Part 2', () => {
    it('should find the top three elves carrying the most calories', () => {
      expect.assertions(2);

      expect(part2(sample)).toStrictEqual(45000);
      expect(part2(input)).toStrictEqual(208191);
    });
  });
});
