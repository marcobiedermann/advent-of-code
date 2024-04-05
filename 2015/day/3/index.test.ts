import { describe, expect, it } from 'vitest';
import { part1, part2 } from '.';
import { getInput } from '../../../utils/file';

const input = await getInput(__dirname);

describe('2015', () => {
  describe('Day 3', () => {
    describe('Part 1', () => {
      it('should return number of unique locations visited', () => {
        expect(part1('>')).toBe(2);
        expect(part1('^>v<')).toBe(4);
        expect(part1('^v^v^v^v^v')).toBe(2);
        expect(part1(input)).toBe(2081);
      });
    });

    describe('Part 2', () => {
      it('should return number of unique locations visited by santa and robo-santa', () => {
        expect(part2('^v')).toBe(3);
        expect(part2('^>v<')).toBe(3);
        expect(part2('^v^v^v^v^v')).toBe(11);
        expect(part2(input)).toBe(2341);
      });
    });
  });
});
