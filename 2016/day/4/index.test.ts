import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import { part1, part2 } from '.';

const input = readFileSync(`${__dirname}/input`, 'utf-8').split('\n');

describe('2016 Day 3', () => {
  describe('Part 1', () => {
    it('should sum the sector IDs of real rooms', () => {
      expect.assertions(2);

      expect(
        part1([
          'aaaaa-bbb-z-y-x-123[abxyz]',
          'a-b-c-d-e-f-g-h-987[abcde]',
          'not-a-real-room-404[oarel]',
          'totally-real-room-200[decoy]',
        ]),
      ).toStrictEqual(1514);
      expect(part1(input)).toStrictEqual(278221);
    });
  });

  describe('Part 2', () => {
    it('should find the sector ID of the room where the northpole objects are being stored', () => {
      expect.assertions(1);

      expect(part2(input)).toStrictEqual(267);
    });
  });
});
