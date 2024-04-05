import { describe, expect, it } from 'vitest';
import { part1, part2 } from '.';

const input = 'ckczppom';

describe('2015', () => {
  describe('Day 4', () => {
    describe('Part 1', () => {
      it('should find a hash which starts with five zeros', () => {
        expect(part1('abcdef')).toBe(609043);
        expect(part1('pqrstuv')).toBe(1048970);
        expect(part1(input)).toBe(117946);
      });
    });

    describe('Part 2', () => {
      it('should find a hash which starts with six zeros', () => {
        expect(part2(input)).toBe(3938038);
      });
    });
  });
});
