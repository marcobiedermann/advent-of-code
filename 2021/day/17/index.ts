import { readFileSync } from 'fs';

const input = readFileSync(`${__dirname}/input`, 'utf-8');

const RE = /target area: x=(-?\d+)\.\.(-?\d+), y=(-?\d+)\.\.(-?\d+)/;

const simulate = (target) => {
  const [, minx, maxx, miny, maxy] = RE.exec(target).map(Number);

  const run = (v, min, max) => {
    let pos = [0, 0];
    let hit = false;
    const positions = [];
    while (!hit && pos[0] <= max[0] && pos[1] >= min[1]) {
      pos = pos.map((p, i) => p + v[i]);
      positions.push(pos);
      v[0] -= v[0] > 0 ? 1 : 0;
      v[1]--;
      hit = pos.every((p, i) => p >= min[i] && p <= max[i]);
    }
    return hit && positions.map(([, y]) => y).reduce((max, v) => Math.max(max, v));
  };

  const minvx = Math.floor(Math.sqrt(minx * 2));
  return [...Array(Math.abs(miny) << 1)]
    .flatMap((_, y) => [...Array(1 + maxx - minvx)].map((_, x) => [x + minvx, miny + y]))
    .map((v) => run(v, [minx, miny], [maxx, maxy]))
    .filter((v) => v !== false);
};

export const part1 = (target) => simulate(target).reduce((max, v) => Math.max(max, v));

export const part2 = (target) => simulate(target).length;

part1(input); // ?
part2(input); // ?
