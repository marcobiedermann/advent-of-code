import { readFileSync } from 'fs';

const input = readFileSync(`${__dirname}/input`, 'utf-8');

function numbers(s) {
  return s
    .split(/[^\d.]+/)
    .filter((t) => t !== '')
    .map(Number);
}

function* chunks(xs, n) {
  for (let i = 0; i < xs.length; i += n) {
    yield xs.slice(i, i + n);
  }
}

// parse line segments
function parse(input) {
  return [...chunks(numbers(input), 4)];
}

function makeGrid(segments) {
  const maxX = segments.reduce((a, s) => Math.max(a, s[0], s[2]), 0);
  const maxY = segments.reduce((a, s) => Math.max(a, s[1], s[3]), 0);

  return [...Array(maxY + 1)].map((x) => Array(maxX + 1).fill(0));
}

function countOverlap(segments) {
  const grid = makeGrid(segments);

  for (const s of segments) {
    let dx = s[2] - s[0];
    let dy = s[3] - s[1];

    dx = dx === 0 ? 0 : dx < 0 ? -1 : 1;
    dy = dy === 0 ? 0 : dy < 0 ? -1 : 1;

    let x = s[0];
    let y = s[1];
    while (x !== s[2] || y != s[3]) {
      grid[y][x] += 1;
      x += dx;
      y += dy;
    }
    grid[y][x] += 1;
  }

  return grid.flat().filter((x) => x > 1).length;
}

function p1(segments) {
  // consider only horizontal or vertical line segments
  return countOverlap(segments.filter((s) => s[0] == s[2] || s[1] == s[3]));
}

function p2(segments) {
  return countOverlap(segments);
}

const segments = parse(input);
console.log(p1(segments));
console.log(p2(segments));
