import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { getInput } from '../../../utils/file.ts';
import { NEWLINE } from '../../../utils/string.ts';
import { part1, part2 } from './index.ts';

const input = (await getInput(import.meta.dirname)).split(NEWLINE);

describe('2015', () => {
  describe('Day 5', () => {
    describe('Part 1', () => {
      it('should filter out nice words', () => {
        assert.strictEqual(
          part1([
            'ugknbfddgicrmopn',
            'aaa',
            'jchzalrnumimnmhp',
            'haegwjzuvuyypxyu',
            'dvszwmarrgswjxmb',
          ]),
          2,
        );
        assert.strictEqual(part1(input), 255);
      });
    });

    describe('Part 2', () => {
      it('should filter out nice words', () => {
        assert.strictEqual(
          part2(['qjhvhtzxzqqjkmpb', 'xxyxx', 'uurcxstgmygtbstg', 'ieodomkazucvgmuy']),
          2,
        );
        assert.strictEqual(part2(input), 55);
      });
    });
  });
});
