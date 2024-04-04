import { readFile } from 'node:fs/promises';
import { describe, expect, it } from 'vitest';
import { part1, part2 } from '.';

const sample = (await readFile(`${__dirname}/input.sample`, 'utf-8')).split('\n');
const input = (await readFile(`${__dirname}/input`, 'utf-8')).split('\n');

describe('Day 3', () => {
  describe('Part 1', () => {
    it('should find the sum of the priorities', () => {
      expect.assertions(2);

      expect(part1(sample)).toStrictEqual(157);
      expect(part1(input)).toStrictEqual(7831);
    });
  });

  describe('Part 2', () => {
    it('should find the sum of the priorities', () => {
      expect.assertions(2);

      expect(part2(sample)).toStrictEqual(70);
      expect(part2(input)).toStrictEqual(2683);
    });
  });
});
