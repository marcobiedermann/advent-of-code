import crypto from 'crypto';

function part1(key: string, digits = 5): number {
  let index = 1;

  while (true) {
    const input = `${key}${index}`;
    const hash = crypto.createHash('md5').update(input).digest('hex');

    if (hash.slice(0, digits) === '0'.repeat(digits)) {
      return index;
    }

    index += 1;
  }
}

function part2(key: string, digits = 6): number {
  return part1(key, digits);
}

export { part1, part2 };
