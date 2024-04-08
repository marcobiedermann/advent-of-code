import { describe, expect, it } from 'vitest';
import { part1 } from '.';
import { getInput } from '../../../utils/file';

const input = (await getInput(__dirname)).split('\n');

describe('2015', () => {
  describe('Day 9', () => {
    describe('Part 1', () => {
      it('should calculate shortest distance', () => {
        expect(
          part1(['London to Dublin = 464', 'London to Belfast = 518', 'Dublin to Belfast = 141']),
        ).toBe(605);
        expect(part1(input)).toBe(117);
      });
    });
  });
});
