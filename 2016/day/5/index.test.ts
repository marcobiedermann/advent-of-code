import { part1, part2 } from '.';

const ONE_MINUTE_IN_MS = 1000 * 60;

describe('2016 Day 5', () => {
  describe('Part 1', () => {
    it(
      'should sum the sector IDs of real rooms',
      () => {
        expect.assertions(2);

        expect(part1('abc3231929')).toStrictEqual('18f47a30');
        expect(part1('uqwqemis')).toStrictEqual('1a3099aa');
      },
      ONE_MINUTE_IN_MS,
    );
  });

  describe('Part 2', () => {
    it(
      'should find the sector ID of the room where the northpole objects are being stored',
      () => {
        expect.assertions(2);

        expect(part2('abc3231929')).toStrictEqual('05ace8e3');
        expect(part2('uqwqemis')).toStrictEqual('694190cd');
      },
      ONE_MINUTE_IN_MS,
    );
  });
});
