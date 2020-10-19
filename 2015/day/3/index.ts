const directions = new Map<string, [number, number]>([
  ['^', [0, 1]],
  ['>', [1, 0]],
  ['v', [0, -1]],
  ['<', [-1, 0]],
]);

function part1(moves: string): number {
  const startLocation = [0, 0];
  const uniqueLocations = new Set([JSON.stringify(startLocation)]);

  moves.split('').reduce((currentLocation, move) => {
    const direction = directions.get(move) || [0, 0];
    const newLocation = [currentLocation[0] + direction[0], currentLocation[1] + direction[1]];

    uniqueLocations.add(JSON.stringify(newLocation));

    return newLocation;
  }, startLocation);

  return uniqueLocations.size;
}

export { part1 };
