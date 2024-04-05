type Direction = '^' | '<' | '>' | 'v';
type Move = [number, number];

const moves = new Map<Direction, Move>([
  ['^', [0, 1]],
  ['<', [-1, 0]],
  ['>', [1, 0]],
  ['v', [0, -1]],
]);
const fallbackMove = [0, 0] as const;
const startLocation: Move = [0, 0];

function part1(presents: string): number {
  let santaLocation: Move = startLocation;

  const houses = new Set([JSON.stringify(startLocation)]);

  for (let i = 0; i < presents.length; i += 1) {
    const present = presents[i] as Direction;
    const move = moves.get(present) || fallbackMove;
    const newSantaLocation: Move = [santaLocation[0] + move[0], santaLocation[1] + move[1]];

    houses.add(JSON.stringify(newSantaLocation));

    santaLocation = newSantaLocation;
  }

  return houses.size;
}

function isEven(n: number): boolean {
  return n % 2 === 0;
}

function part2(presents: string): number {
  let santaLocation: Move = startLocation;
  let roboSantaLocation: Move = startLocation;

  const houses = new Set([JSON.stringify(startLocation)]);

  for (let i = 0; i < presents.length; i += 1) {
    const present = presents[i] as Direction;
    const move = moves.get(present) || fallbackMove;

    if (isEven(i)) {
      const newSantaLocation: Move = [santaLocation[0] + move[0], santaLocation[1] + move[1]];

      houses.add(JSON.stringify(newSantaLocation));

      santaLocation = newSantaLocation;
    } else {
      const newRoboSantaLocation: Move = [
        roboSantaLocation[0] + move[0],
        roboSantaLocation[1] + move[1],
      ];

      houses.add(JSON.stringify(newRoboSantaLocation));

      roboSantaLocation = newRoboSantaLocation;
    }
  }

  return houses.size;
}

export { part1, part2 };
