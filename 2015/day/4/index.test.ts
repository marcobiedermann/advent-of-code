import { part1, part2 } from '.';

const input = 'ckczppom';

describe('Day 4', () => {
  describe('Part 1', () => {
    it('should find a hash which starts with five zeros', () => {
      expect.assertions(1);

      expect(part1(input)).toStrictEqual(117946);
    });
  });

  describe('Part 2', () => {
    it('should find a hash which starts with six zeros', () => {
      expect.assertions(1);

      expect(part2(input)).toStrictEqual(3938038);
    });
  });
});
