import { createHash } from 'node:crypto';

function part1(doorId: string): string {
  const password: string[] = [];
  let index = 0;

  while (password.length < 8) {
    const hash = createHash('md5')
      .update(doorId + index)
      .digest('hex');

    if (hash.startsWith('00000')) {
      password.push(hash[5]);
    }

    index += 1;
  }

  return password.join('');
}

function part2(doorId: string): string {
  const password: string[] = [];
  let index = 0;

  while (password.length < 8) {
    const hash = createHash('md5')
      .update(doorId + index)
      .digest('hex');

    if (hash.startsWith('00000')) {
      const position = parseInt(hash[5], 10);

      if (position < 8 && !password[position]) {
        // eslint-disable-next-line prefer-destructuring
        password[position] = hash[6];
      }
    }

    index += 1;
  }

  return password.join('');
}

export { part1, part2 };
