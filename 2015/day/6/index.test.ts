import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { getInput } from '../../../utils/file.ts';
import { NEWLINE } from '../../../utils/string.ts';
import { part1, part2 } from './index.ts';

const input = (await getInput(import.meta.dirname)).split(NEWLINE);

describe('2015', () => {
  describe('Day 6', () => {
    describe('Part 1', () => {
      it('should could could lit lights', () => {
        assert.strictEqual(part1(input), 377891);
      });
    });

    describe('Part 2', () => {
      it('should return the total brightness', () => {
        assert.strictEqual(part2(input), 14110788);
      });
    });
  });
});
