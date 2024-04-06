import { describe, expect, it } from 'vitest';
import { part1, part2 } from '.';
import { getInput } from '../../../utils/file';

const input = await getInput(__dirname);

describe('2015', () => {
  describe('Day 1', () => {
    describe('Part 1', () => {
      it('should return floor number', () => {
        expect(part1('(())')).toBe(0);
        expect(part1('()()')).toBe(0);
        expect(part1('(((')).toBe(3);
        expect(part1('(()(()(')).toBe(3);
        expect(part1('))(((((')).toBe(3);
        expect(part1('())')).toBe(-1);
        expect(part1('))(')).toBe(-1);
        expect(part1(')))')).toBe(-3);
        expect(part1(')())())')).toBe(-3);
        expect(part1(input)).toBe(280);
      });
    });

    describe('Part 2', () => {
      it('should return index of the first character to enter the basement', () => {
        expect(part2(')')).toBe(1);
        expect(part2('()())')).toBe(5);
        expect(part2(input)).toBe(1797);
      });
    });
  });
});
