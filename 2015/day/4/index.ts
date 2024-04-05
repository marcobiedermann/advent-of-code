import crypto from 'node:crypto';

const ZERO = '0' as const;

function getMd5Hash(input: string): string {
  return crypto.createHash('md5').update(input).digest('hex');
}

function part1(key: string, digits = 5): number {
  const str = ZERO.repeat(digits);
  let index = 1;

  while (true) {
    const hash = getMd5Hash(`${key}${index}`);

    if (hash.startsWith(str)) {
      return index;
    }

    index += 1;
  }
}

function part2(key: string, digits = 6): number {
  return part1(key, digits);
}

export { part1, part2 };
