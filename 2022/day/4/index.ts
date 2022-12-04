interface Section {
  start: number;
  end: number;
}

interface AssignmentPair {
  firstSection: Section;
  secondSection: Section;
}

function parseAssignmentPair(assignmentPair: string): AssignmentPair {
  const { groups } =
    assignmentPair.match(
      /(?<firstSectionStart>\d+)-(?<firstSectionEnd>\d+),(?<secondSectionStart>\d+)-(?<secondSectionEnd>\d+)/,
    ) || [];

  if (!groups) {
    throw new Error('Invalid Input');
  }

  const { firstSectionStart, firstSectionEnd, secondSectionStart, secondSectionEnd } = groups;

  return {
    firstSection: {
      start: parseInt(firstSectionStart, 10),
      end: parseInt(firstSectionEnd, 10),
    },
    secondSection: {
      start: parseInt(secondSectionStart, 10),
      end: parseInt(secondSectionEnd, 10),
    },
  };
}

function part1(assignmentPairs: string[]): number {
  return assignmentPairs.filter((assignmentPair) => {
    const { firstSection, secondSection } = parseAssignmentPair(assignmentPair);

    return (
      (firstSection.start <= secondSection.start && firstSection.end >= secondSection.end) ||
      (firstSection.start >= secondSection.start && firstSection.end <= secondSection.end)
    );
  }).length;
}

function part2(assignmentPairs: string[]): number {
  return assignmentPairs.filter((assignmentPair) => {
    const { firstSection, secondSection } = parseAssignmentPair(assignmentPair);

    return firstSection.end >= secondSection.start && secondSection.end >= firstSection.start;
  }).length;
}

export { part1, part2 };
