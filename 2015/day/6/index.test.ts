import { describe, expect, it } from 'vitest';
import { part1, part2 } from '.';
import { getInput } from '../../../utils/file';
import { NEWLINE } from '../../../utils/string';

const input = (await getInput(__dirname)).split(NEWLINE);

describe('2015', () => {
  describe('Day 6', () => {
    describe('Part 1', () => {
      it('should could could lit lights', () => {
        expect(part1(input)).toBe(377891);
      });
    });

    describe('Part 2', () => {
      it('should return the total brightness', () => {
        expect(part2(input)).toBe(14110788);
      });
    });
  });
});
