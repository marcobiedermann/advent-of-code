import { describe, expect, it } from 'vitest';
import { part1, part2 } from '.';
import { getInput } from '../../../utils/file';
import { NEWLINE } from '../../../utils/string';

const input = (await getInput(__dirname)).split(NEWLINE);

describe('2015', () => {
  describe('Day 1', () => {
    describe('Part 1', () => {
      it('should return total square feet of wrapping paper', () => {
        expect(part1(['2x3x4'])).toBe(58);
        expect(part1(['1x1x10'])).toBe(43);
        expect(part1(input)).toBe(1598415);
      });
    });

    describe('Part 2', () => {
      it('should return total feet of ribbon', () => {
        expect(part2(['2x3x4'])).toBe(34);
        expect(part2(['1x1x10'])).toBe(14);
        expect(part2(input)).toBe(3812909);
      });
    });
  });
});
