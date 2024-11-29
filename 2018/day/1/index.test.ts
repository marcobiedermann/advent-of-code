import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { getInput } from '../../../utils/file.ts';
import { part1, part2 } from './index.ts';

const input = (await getInput(import.meta.dirname)).split('\n').map(Number);

describe('day-01', () => {
  describe('Part 1', () => {
    it('should return resulting frequency', () => {
      assert.strictEqual(part1(input), 529);
    });
  });

  describe('Part 2', () => {
    it('should find first frequency reached twice', () => {
      assert.strictEqual(part2(input), 464);
    });
  });
});
