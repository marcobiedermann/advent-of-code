import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { describe, it } from 'node:test';
import { part1 } from './index.ts';

const input = (await readFile(`${import.meta.dirname}/input`, 'utf-8')).split('\n').map(Number);

describe('Day 25', () => {
  describe('Part 1', () => {
    it('should return the encryption key', () => {
      assert.strictEqual(part1([5764801, 17807724]), 14897079);
      assert.strictEqual(part1(input), 17673381);
    });
  });
});
