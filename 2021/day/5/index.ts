import { readFileSync } from 'fs';

const input = readFileSync(`${__dirname}/input`, 'utf-8').split('\n');

interface Line {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
}

function parseLine(line: string): Line {
  const { groups } = line.match(/(?<x1>\d+),(?<y1>\d+) -> (?<x2>\d+),(?<y2>\d+)/) || [];

  if (!groups) {
    throw new Error('Invalid input');
  }

  const { x1, y1, x2, y2 } = groups;

  return {
    x1: parseInt(x1, 10),
    y1: parseInt(y1, 10),
    x2: parseInt(x2, 10),
    y2: parseInt(y2, 10),
  };
}

function parseLines(lines: string[]): Line[] {
  return lines.map(parseLine);
}

function makeGrid(x: number, y: number, value = 0): number[][] {
  return [...Array(y)].map((_) => Array(x).fill(value));
}

function getHorizontalAndVerticalLines(lines: Line[]): Line[] {
  return lines.filter((line) => line.x1 === line.x2 || line.y1 === line.y2);
}

function getMaxX(lines: Line[]): number {
  return lines.reduce(
    (accumulator, currentValue) => Math.max(accumulator, currentValue.x1, currentValue.x2),
    0,
  );
}

function getMaxY(lines: Line[]): number {
  return lines.reduce(
    (accumulator, currentValue) => Math.max(accumulator, currentValue.y1, currentValue.y2),
    0,
  );
}

function countOverlappingPoints(grid: number[][]): number {
  return grid.flat().filter((value) => value > 1).length;
}

function part1(lines: string[]): number {
  const parsedLines = parseLines(lines);
  const horizontalAndVerticalLines = getHorizontalAndVerticalLines(parsedLines);

  const maxX = getMaxX(horizontalAndVerticalLines);
  const maxY = getMaxY(horizontalAndVerticalLines);
  const grid = makeGrid(maxX + 1, maxY + 1);

  horizontalAndVerticalLines.forEach((line) => {
    let dx = line.x2 - line.x1;
    let dy = line.y2 - line.y1;

    dx = dx === 0 ? 0 : dx < 0 ? -1 : 1;
    dy = dy === 0 ? 0 : dy < 0 ? -1 : 1;

    let x = line.x1;
    let y = line.y1;

    while (x !== line.x2 || y !== line.y2) {
      grid[y][x] += 1;
      x += dx;
      y += dy;
    }

    grid[y][x] += 1;
  });

  const totalPoints = countOverlappingPoints(grid);

  return totalPoints;
}

part1(input); // ?

function part2(lines: string[]): number {
  const parsedLines = parseLines(lines);

  const maxX = getMaxX(parsedLines);
  const maxY = getMaxY(parsedLines);
  const grid = makeGrid(maxX + 1, maxY + 1);

  parsedLines.forEach((line) => {
    let dx = line.x2 - line.x1;
    let dy = line.y2 - line.y1;

    dx = dx === 0 ? 0 : dx < 0 ? -1 : 1;
    dy = dy === 0 ? 0 : dy < 0 ? -1 : 1;

    let x = line.x1;
    let y = line.y1;

    while (x !== line.x2 || y !== line.y2) {
      grid[y][x] += 1;
      x += dx;
      y += dy;
    }

    grid[y][x] += 1;
  });

  const totalPoints = countOverlappingPoints(grid);

  return totalPoints;
}

part2(input); // ?

export { part1, part2 };
