import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { getInput } from '../../../utils/file.ts';
import { NEWLINE } from '../../../utils/string.ts';
import { part1, part2 } from './index.ts';

const input = (await getInput(import.meta.dirname)).split(NEWLINE);

describe('2015', () => {
  describe('Day 1', () => {
    describe('Part 1', () => {
      it('should return total square feet of wrapping paper', () => {
        assert.strictEqual(part1(['2x3x4']), 58);
        assert.strictEqual(part1(['1x1x10']), 43);
        assert.strictEqual(part1(input), 1598415);
      });
    });

    describe('Part 2', () => {
      it('should return total feet of ribbon', () => {
        assert.strictEqual(part2(['2x3x4']), 34);
        assert.strictEqual(part2(['1x1x10']), 14);
        assert.strictEqual(part2(input), 3812909);
      });
    });
  });
});
