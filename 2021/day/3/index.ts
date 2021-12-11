function countZerosAndOnes(binaryNumbers: string[], position: number) {
  let zeros = 0;
  let ones = 0;

  binaryNumbers.forEach((binaryNumber) => {
    const bit = binaryNumber[position];

    if (bit === '0') {
      zeros += 1;
    } else {
      ones += 1;
    }
  });

  return { zeros, ones };
}

function part1(binaryNumbers: string[]): number {
  let mostCommon = '';
  let leastCommon = '';

  for (let i = 0; i < binaryNumbers[0].length; i += 1) {
    const { zeros, ones } = countZerosAndOnes(binaryNumbers, i);

    if (zeros > ones) {
      mostCommon += '0';
      leastCommon += '1';
    } else {
      mostCommon += '1';
      leastCommon += '0';
    }
  }

  const gammaRate = parseInt(mostCommon, 2);
  const epsilonRate = parseInt(leastCommon, 2);

  return gammaRate * epsilonRate;
}

function calculateRating(numbers: string[], isMost = true, position = 0): string {
  if (numbers.length === 1) {
    return numbers[0];
  }

  const { zeros, ones } = countZerosAndOnes(numbers, position);

  const filteredNumbers =
    zeros > ones
      ? numbers.filter((number) => number[position] === (isMost ? '0' : '1'))
      : numbers.filter((number) => number[position] === (isMost ? '1' : '0'));

  return calculateRating(filteredNumbers, isMost, position + 1);
}

function part2(binaryNumbers: string[]): number {
  const oxygenGeneratorRating = parseInt(calculateRating(binaryNumbers), 2);
  const co2ScrubberRating = parseInt(calculateRating(binaryNumbers, false), 2);

  return oxygenGeneratorRating * co2ScrubberRating;
}

export { part1, part2 };
