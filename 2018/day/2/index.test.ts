import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { getInput } from '../../../utils/file.ts';
import { part1 } from './index.ts';

const input = (await getInput(import.meta.dirname)).split('\n');

describe('Day 2', () => {
  describe('Part 1', () => {
    it('should return the checksum of boxes containing two or three unique letters', () => {
      assert.strictEqual(
        part1(['abcdef', 'bababc', 'abbcde', 'abcccd', 'aabcdd', 'abcdee', 'ababab']),
        12,
      );
      assert.strictEqual(part1(input), 5727);
    });
  });
});
