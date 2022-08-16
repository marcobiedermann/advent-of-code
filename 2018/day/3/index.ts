/* eslint-disable import/prefer-default-export */

import { readFileSync } from 'node:fs';

const input = readFileSync(`${__dirname}/input`, 'utf-8').split('\n');

interface Claim {
  id: string;
  x: number;
  y: number;
  width: number;
  height: number;
}

function parseClaim(claim: string): Claim {
  const { groups } =
    claim.match(/#(?<id>\d+) @ (?<x>\d+),(?<y>\d+): (?<width>\d+)x(?<height>\d+)/) || [];

  if (!groups) {
    throw new Error('Invalid input');
  }

  const { id, x, y, width, height } = groups;

  return {
    id,
    x: parseInt(x, 10),
    y: parseInt(y, 10),
    width: parseInt(width, 10),
    height: parseInt(height, 10),
  };
}

function part1(claims: string[]): number {
  const map = new Map();
  const parsedClaims = claims.map(parseClaim);

  parsedClaims.forEach((claim) => {
    const { x, y, width, height } = claim;

    for (let i = x; i < x + width; i += 1) {
      for (let j = y; j < y + height; j += 1) {
        const key = [i, j].toString();

        map.set(key, (map.get(key) || 0) + 1);
      }
    }
  });

  let counter = 0;

  map.forEach((entry) => {
    if (entry !== 1) {
      counter += 1;
    }
  });

  return counter;
}

export { part1 };
