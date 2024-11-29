import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { describe, it } from 'node:test';
import { part1, part2 } from './index.ts';

const input = (await readFile(`${import.meta.dirname}/input`, 'utf-8')).split('\n');

describe('2016 Day 3', () => {
  describe('Part 1', () => {
    it('should sum the sector IDs of real rooms', () => {
      assert.strictEqual(
        part1([
          'aaaaa-bbb-z-y-x-123[abxyz]',
          'a-b-c-d-e-f-g-h-987[abcde]',
          'not-a-real-room-404[oarel]',
          'totally-real-room-200[decoy]',
        ]),
        1514,
      );
      assert.strictEqual(part1(input), 278221);
    });
  });

  describe('Part 2', () => {
    it('should find the sector ID of the room where the northpole objects are being stored', () => {
      assert.strictEqual(part2(input), 267);
    });
  });
});
