interface Signature {
  [key: string]: number;
}

const signature: Signature = {
  children: 3,
  cats: 7,
  samoyeds: 2,
  pomeranians: 3,
  akitas: 0,
  vizslas: 0,
  goldfish: 5,
  trees: 3,
  cars: 2,
  perfumes: 1,
};

function mapThing(thing: string): [string, number] {
  const [item, count] = thing.split(': ');

  return [item, parseInt(count, 10)];
}

function parseInput(input: string) {
  const { groups } = input.match(/Sue (?<number>\d+): (?<things>(\w+: \d+(, )?){3})/) || [];

  if (!groups) {
    throw new Error('Invalid input');
  }

  const { number, things } = groups;

  return {
    number: parseInt(number, 10),
    things: things.split(', ').map(mapThing),
  };
}

function part1(input: string[]): number {
  for (let i = 0; i < input.length; i += 1) {
    const { number, things } = parseInput(input[i]);
    const [one, two, three] = things;

    if (
      signature[one[0]] === one[1] &&
      signature[two[0]] === two[1] &&
      signature[three[0]] === three[1]
    ) {
      return number;
    }
  }

  return -1;
}

export { part1 };
