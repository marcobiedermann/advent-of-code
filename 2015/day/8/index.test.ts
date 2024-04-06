import { describe, expect, it } from 'vitest';
import { part1 } from '.';
import { getInput } from '../../../utils/file';
import { NEWLINE } from '../../../utils/string';

const input = (await getInput(__dirname)).split(NEWLINE);

describe('2015', () => {
  describe('Day 8', () => {
    describe('Part 1', () => {
      it('should return the number of characters', () => {
        expect(part1(['""', '"abc"', '"aaa\\"aaa"', '"\\x27"'])).toBe(12);
        expect(part1(input)).toBe(1350);
      });
    });
  });
});
