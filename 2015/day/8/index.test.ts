import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { getInput } from '../../../utils/file.ts';
import { NEWLINE } from '../../../utils/string.ts';
import { part1 } from './index.ts';

const input = (await getInput(import.meta.dirname)).split(NEWLINE);

describe('2015', () => {
  describe('Day 8', () => {
    describe('Part 1', () => {
      it('should return the number of characters', () => {
        assert.strictEqual(part1(['""', '"abc"', '"aaa\\"aaa"', '"\\x27"']), 12);
        assert.strictEqual(part1(input), 1350);
      });
    });
  });
});
