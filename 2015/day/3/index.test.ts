import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { getInput } from '../../../utils/file.ts';
import { part1, part2 } from './index.ts';

const input = await getInput(import.meta.dirname);

describe('2015', () => {
  describe('Day 3', () => {
    describe('Part 1', () => {
      it('should return number of unique locations visited', () => {
        assert.strictEqual(part1('>'), 2);
        assert.strictEqual(part1('^>v<'), 4);
        assert.strictEqual(part1('^v^v^v^v^v'), 2);
        assert.strictEqual(part1(input), 2081);
      });
    });

    describe('Part 2', () => {
      it('should return number of unique locations visited by santa and robo-santa', () => {
        assert.strictEqual(part2('^v'), 3);
        assert.strictEqual(part2('^>v<'), 3);
        assert.strictEqual(part2('^v^v^v^v^v'), 11);
        assert.strictEqual(part2(input), 2341);
      });
    });
  });
});
