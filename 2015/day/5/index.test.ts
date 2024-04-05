import { readFile } from 'node:fs/promises';
import { describe, expect, it } from 'vitest';
import { part1, part2 } from '.';

const input = (await readFile(`${__dirname}/input`, 'utf-8')).split('\n');

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
