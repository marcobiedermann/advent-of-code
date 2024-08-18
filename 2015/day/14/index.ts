const TIME = 2503;

function getDistance(speed: number, time: number, rest: number): number {
  return Math.ceil(TIME / (time + rest)) * (speed * time);
}

function part1(input: string[]) {
  const distances = input.map((reindeer) => {
    const { groups } =
      reindeer.match(
        /(?<name>\w+) can fly (?<speed>\d+) km\/s for (?<time>\d+) seconds, but then must rest for (?<rest>\d+) seconds./,
      ) || [];

    if (!groups) {
      throw new Error('Invalid Input');
    }

    const { speed, time, rest } = groups;

    return getDistance(parseInt(speed, 10), parseInt(time, 10), parseInt(rest, 10));
  });

  return Math.max(...distances);
}

export { part1 };
