import { describe, expect, it } from 'vitest';
import { part1, part2 } from '.';

const input = [1, 20, 11, 6, 12, 0];

describe('Day 15', () => {
  describe('Part 1', () => {
    it('should return spoken number at position `2020`', () => {
      expect.assertions(2);

      const n = 2020;

      expect(part1([0, 3, 6], n)).toStrictEqual(436);
      expect(part1(input, n)).toStrictEqual(1085);
    });
  });

  describe.skip('Part 2', () => {
    it('should return spoken number at position `30000000`', () => {
      expect.assertions(8);

      const n = 30000000;

      expect(part2([0, 3, 6], n)).toStrictEqual(175594);
      expect(part2([1, 3, 2], n)).toStrictEqual(2578);
      expect(part2([2, 1, 3], n)).toStrictEqual(3544142);
      expect(part2([1, 2, 3], n)).toStrictEqual(261214);
      expect(part2([2, 3, 1], n)).toStrictEqual(6895259);
      expect(part2([3, 2, 1], n)).toStrictEqual(18);
      expect(part2([3, 1, 2], n)).toStrictEqual(362);
      expect(part2(input, n)).toStrictEqual(10652);
    });
  });
});
