import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { getInput } from '../../../utils/file.ts';
import { part1, part2 } from './index.ts';

const input = await getInput(import.meta.dirname);

describe('2015', () => {
  describe('Day 1', () => {
    describe('Part 1', () => {
      it('should return floor number', () => {
        assert.strictEqual(part1('(())'), 0);
        assert.strictEqual(part1('()()'), 0);
        assert.strictEqual(part1('((('), 3);
        assert.strictEqual(part1('(()(()('), 3);
        assert.strictEqual(part1('))((((('), 3);
        assert.strictEqual(part1('())'), -1);
        assert.strictEqual(part1('))('), -1);
        assert.strictEqual(part1(')))'), -3);
        assert.strictEqual(part1(')())())'), -3);
        assert.strictEqual(part1(input), 280);
      });
    });

    describe('Part 2', () => {
      it('should return index of the first character to enter the basement', () => {
        assert.strictEqual(part2(')'), 1);
        assert.strictEqual(part2('()())'), 5);
        assert.strictEqual(part2(input), 1797);
      });
    });
  });
});
