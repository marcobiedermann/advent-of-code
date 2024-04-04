import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import { part1, part2 } from '.';

const input = readFileSync(`${__dirname}/input`, 'utf-8').split('\n').map(Number);

describe('Day 1', () => {
  describe('Part 1', () => {
    it('should find the two entries that sum to 2020', () => {
      expect.assertions(2);

      expect(part1([1721, 979, 366, 299, 675, 1456], 2020)).toStrictEqual(514579);
      expect(part1(input, 2020)).toStrictEqual(902451);
    });
  });

  describe('Part 2', () => {
    it('should find the three entries that sum to 2020', () => {
      expect.assertions(2);

      expect(part2([1721, 979, 366, 299, 675, 1456], 2020)).toStrictEqual(241861950);
      expect(part2(input, 2020)).toStrictEqual(85555470);
    });

    it('should not mutate input', () => {
      expect.assertions(1);

      const entries = [1721, 979, 366, 299, 675, 1456];

      part2(entries, 2020);

      expect(entries).toStrictEqual([1721, 979, 366, 299, 675, 1456]);
    });
  });
});
