import { NEWLINE } from '../../../utils/string.ts';

function parseUnusualData(data: string): number[][] {
  return data.split(NEWLINE).map((level) => level.split(' ').map(Number));
}

const MAX = 3;

function isAllIncreasing(levels: number[]): boolean {
  return levels
    .slice(1)
    .every((level, index) => level > levels[index] && level <= levels[index] + MAX);
}

function isAllDecreasing(levels: number[]) {
  return levels
    .slice(1)
    .every((level, index) => level < levels[index] && level >= levels[index] - MAX);
}

function part1(unusualData: string): number {
  const reports = parseUnusualData(unusualData);

  return reports.filter((levels) => isAllIncreasing(levels) || isAllDecreasing(levels)).length;
}

function part2(unusualData: string): number {
  const reports = parseUnusualData(unusualData);

  return reports
    .map((report) => [report, ...report.map((_level, index) => report.toSpliced(index, 1))])
    .filter((mappedLevels) =>
      mappedLevels.some((levels) => isAllIncreasing(levels) || isAllDecreasing(levels)),
    ).length;
}

export { part1, part2 };
