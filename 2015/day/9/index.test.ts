import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { getInput } from '../../../utils/file.ts';
import { part1 } from './index.ts';

const input = (await getInput(import.meta.dirname)).split('\n');

describe('2015', () => {
  describe('Day 9', () => {
    describe('Part 1', () => {
      it('should calculate shortest distance', () => {
        assert.strictEqual(
          part1(['London to Dublin = 464', 'London to Belfast = 518', 'Dublin to Belfast = 141']),
          605,
        );
        assert.strictEqual(part1(input), 117);
      });
    });
  });
});
