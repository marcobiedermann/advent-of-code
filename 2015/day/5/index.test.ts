import { describe, expect, it } from 'vitest';
import { part1, part2 } from '.';
import { getInput } from '../../../utils/file';
import { NEWLINE } from '../../../utils/string';

const input = (await getInput(__dirname)).split(NEWLINE);

describe('2015', () => {
  describe('Day 5', () => {
    describe('Part 1', () => {
      it('should filter out nice words', () => {
        expect(
          part1([
            'ugknbfddgicrmopn',
            'aaa',
            'jchzalrnumimnmhp',
            'haegwjzuvuyypxyu',
            'dvszwmarrgswjxmb',
          ]),
        ).toBe(2);
        expect(part1(input)).toBe(255);
      });
    });

    describe('Part 2', () => {
      it('should filter out nice words', () => {
        expect(part2(['qjhvhtzxzqqjkmpb', 'xxyxx', 'uurcxstgmygtbstg', 'ieodomkazucvgmuy'])).toBe(
          2,
        );
        expect(part2(input)).toBe(55);
      });
    });
  });
});
