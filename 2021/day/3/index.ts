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

function calculateRating(binaryNumbers: string[], isMost: boolean): string {
  let filteredNumbers = [...binaryNumbers];

  for (let i = 0; i < binaryNumbers[0].length; i += 1) {
    const { zeros, ones } = countZerosAndOnes(filteredNumbers, i);

    if (zeros > ones) {
      filteredNumbers = filteredNumbers.filter(
        (binaryNumber) => binaryNumber[i] === (isMost ? '0' : '1'),
      );
    } else {
      filteredNumbers = filteredNumbers.filter(
        (binaryNumber) => binaryNumber[i] === (isMost ? '1' : '0'),
      );
    }

    if (filteredNumbers.length === 1) {
      break;
    }
  }

  return filteredNumbers[0];
}

function part2(binaryNumbers: string[]): number {
  const oxygenGeneratorRating = parseInt(calculateRating(binaryNumbers, true), 2);
  const co2ScrubberRating = parseInt(calculateRating(binaryNumbers, false), 2);

  return oxygenGeneratorRating * co2ScrubberRating;
}

export { part1, part2 };
