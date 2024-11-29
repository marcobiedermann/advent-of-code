import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { part1, part2 } from './index.ts';

const input = 'ckczppom';

describe('2015', () => {
  describe('Day 4', () => {
    describe('Part 1', () => {
      it('should find a hash which starts with five zeros', () => {
        assert.strictEqual(part1('abcdef'), 609043);
        assert.strictEqual(part1('pqrstuv'), 1048970);
        assert.strictEqual(part1(input), 117946);
      });
    });

    describe('Part 2', () => {
      it('should find a hash which starts with six zeros', () => {
        assert.strictEqual(part2(input), 3938038);
      });
    });
  });
});
