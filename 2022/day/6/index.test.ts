import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { getInput } from '../../../utils/file.ts';
import { part1, part2 } from './index.ts';

const input = await getInput(import.meta.dirname);

describe('Day 6', () => {
  describe('Part 1', () => {
    it('should find the number of characters that need to be processed before the first start-of-package marker', () => {
      assert.strictEqual(part1('bvwbjplbgvbhsrlpgdmjqwftvncz'), 5);
      assert.strictEqual(part1('nppdvjthqldpwncqszvftbrmjlhg'), 6);
      assert.strictEqual(part1('nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg'), 10);
      assert.strictEqual(part1('zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw'), 11);
      assert.strictEqual(part1(input), 1155);
    });
  });

  describe('Part 2', () => {
    it('should find the number of characters that need to be processed before the first start-of-package marker', () => {
      assert.strictEqual(part2('mjqjpqmgbljsphdztnvjfqwrcgsmlb'), 19);
      assert.strictEqual(part2('bvwbjplbgvbhsrlpgdmjqwftvncz'), 23);
      assert.strictEqual(part2('nppdvjthqldpwncqszvftbrmjlhg'), 23);
      assert.strictEqual(part2('nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg'), 29);
      assert.strictEqual(part2('zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw'), 26);
      assert.strictEqual(part2(input), 2789);
    });
  });
});
