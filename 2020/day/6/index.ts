function union<T>(a: Set<T>, b: Set<T>): Set<T> {
  return new Set([...a, ...b]);
}

function intersection<T>(a: Set<T>, b: Set<T>): Set<T> {
  return new Set([...a].filter((element) => b.has(element)));
}

function part1(groups: string[]): number {
  return groups.reduce(
    (totalGroups, group) =>
      totalGroups +
      group
        .split('\n')
        .map((person) => new Set(person))
        .reduce((totalPeople, person) => union(totalPeople, new Set(person))).size,
    0,
  );
}

function part2(groups: string[]): number {
  return groups.reduce(
    (totalGroups, group) =>
      totalGroups +
      group
        .split('\n')
        .map((person) => new Set(person))
        .reduce((totalPeople, person) => intersection(totalPeople, new Set(person))).size,
    0,
  );
}

export { part1, part2 };
