import { subtract } from '../../../utils/math.ts';
import { NEWLINE } from '../../../utils/string.ts';

function parseLists(lists: string): [number[], number[]] {
  const leftList: number[] = [];
  const rightList: number[] = [];

  lists.split(NEWLINE).forEach((line) => {
    const [a, b] = line.split(/\s+/).map(Number);

    leftList.push(a);
    rightList.push(b);
  });

  return [leftList, rightList];
}

function sortListOfNumbers(list: number[]): number[] {
  return [...list].sort(subtract);
}

function calculateTotalDistance(left: number[], right: number[]): number {
  return left.reduce((total, leftValue, index) => total + Math.abs(leftValue - right[index]), 0);
}

function part1(lists: string): number {
  const [leftList, rightList] = parseLists(lists);
  const sortedLeftList = sortListOfNumbers(leftList);
  const sortedRightList = sortListOfNumbers(rightList);
  const totalDistance = calculateTotalDistance(sortedLeftList, sortedRightList);

  return totalDistance;
}

function calculateTotalSimilarityScore(left: number[], frequencyMap: Map<number, number>): number {
  return left.reduce(
    (total, leftValue) => total + leftValue * (frequencyMap.get(leftValue) || 0),
    0,
  );
}

function createFrequencyMap(list: number[]): Map<number, number> {
  return list.reduce(
    (map, number) => map.set(number, (map.get(number) || 0) + 1),
    new Map<number, number>(),
  );
}

function part2(lists: string): number {
  const [leftList, rightList] = parseLists(lists);
  const frequencyMap = createFrequencyMap(rightList);
  const totalSimilarityScore = calculateTotalSimilarityScore(leftList, frequencyMap);

  return totalSimilarityScore;
}

export { part1, part2 };
