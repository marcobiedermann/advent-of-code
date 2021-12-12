const directions = new Map<string, [number, number]>([
  ['^', [0, 1]],
  ['v', [0, -1]],
  ['<', [-1, 0]],
  ['>', [1, 0]],
]);

function parseMoves(moves: string): string[] {
  return moves.split('');
}

function part1(moves: string): number {
  const parsedMoves = parseMoves(moves);
  const start = [0, 0];
  const set = new Set();

  set.add(start.join(','));

  parsedMoves.reduce((position, move) => {
    const direction = directions.get(move) || [0, 0];
    const newPosition = [position[0] + direction[0], position[1] + direction[1]];

    set.add(newPosition.join(','));

    return newPosition;
  }, start);

  return set.size;
}

function isEven(n: number): boolean {
  return n % 2 === 0;
}

function part2(moves: string): number {
  const parsedMoves = parseMoves(moves);
  const set = new Set();

  const start = [0, 0];

  set.add(start.join(','));

  parsedMoves.reduce(
    (positions, move, index) => {
      const direction = directions.get(move) || [0, 0];

      if (isEven(index)) {
        const newSantaPosition = [
          positions.santa[0] + direction[0],
          positions.santa[1] + direction[1],
        ];

        set.add(newSantaPosition.join(','));

        return {
          ...positions,
          santa: newSantaPosition,
        };
      }

      const newRobotPosition = [
        positions.robot[0] + direction[0],
        positions.robot[1] + direction[1],
      ];

      set.add(newRobotPosition.join(','));

      return {
        ...positions,
        robot: newRobotPosition,
      };
    },
    {
      santa: start,
      robot: start,
    },
  );

  return set.size;
}

export { part1, part2 };
