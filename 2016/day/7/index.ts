import { readFileSync } from 'fs';

const input = readFileSync(`${__dirname}/input`, 'utf-8').split('\n');

function isPalindrome(str: string): boolean {
  for (let i = 0; i < str.length / 2; i += 1) {
    if (str[i] !== str[str.length - i - 1]) {
      return false;
    }
  }

  return true;
}

function getSlices(str: string, size: number): string[] {
  const slices = [];

  for (let i = 0; i < str.length - (size - 1); i += 1) {
    const slice = str.slice(i, i + size);

    slices.push(slice);
  }

  return slices;
}

function supportsTLS(ip: string) {
  const { groups } = ip.match(/(?<start>[a-z]+)\[(?<middle>[a-z]+)\](?<end>[a-z]+)/) || [];

  if (!groups) {
    throw new Error('IP does not match pattern');
  }

  const { start, middle, end } = groups;
  const size = 4;

  const startSlices = getSlices(start, size);
  const middleSlices = getSlices(middle, size);
  const endSlices = getSlices(end, size);

  return (
    middleSlices.some((slice) => !isPalindrome(slice)) &&
    [...startSlices, ...endSlices].some((slice) => {
      const set = new Set(slice);

      return set.size >= 2 && isPalindrome(slice);
    })
  );
}

function part1(ips: string[]): number {
  return ips.filter(supportsTLS).length;
}

part1(input); // ?
