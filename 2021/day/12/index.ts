import { readFileSync } from 'fs';

const input = readFileSync(`${__dirname}/input`, 'utf-8');

const exampleInput1 = `start-A
start-b
A-c
A-b
b-d
A-end
b-end`;

const exampleInput2 = `dc-end
HN-start
start-kj
dc-start
dc-HN
LN-dc
HN-end
kj-sa
kj-HN
kj-dc`;

const exampleInput3 = `fs-end
he-DX
fs-he
start-DX
pj-DX
end-zg
zg-sl
zg-pj
pj-he
RW-he
fs-DX
pj-RW
zg-RW
start-pj
he-WI
zg-he
pj-fs
start-RW`;

const paths = new Map<string, string[]>();

input.split('\n').forEach((row) => {
  const [start, end] = row.split('-');

  const addToStart = paths.get(start);

  if (addToStart === undefined) {
    paths.set(start, [end]);
  } else {
    addToStart.push(end);
  }

  const addToEnd = paths.get(end);

  if (addToEnd === undefined) {
    paths.set(end, [start]);
  } else {
    addToEnd.push(start);
  }
});

function getPossiblePaths(node: string, visited: string[], part2: boolean): string[][] {
  const nextVisited = [...visited, node];

  if (node === 'end') {
    return [nextVisited];
  }

  const possibles = paths.get(node);

  if (possibles === undefined) {
    throw Error(`Tried to visit ${node} that does not exist?`);
  }

  const toReturn: string[][] = [];

  possibles.forEach((nextNode) => {
    if (nextNode.toLowerCase() == nextNode) {
      if (!part2 && visited.includes(nextNode)) {
        return;
      }

      if (part2) {
        if (nextNode == 'start') {
          return;
        }

        const counts: { [key: string]: true } = {};
        let visitedTwice = false;

        nextVisited.forEach((val) => {
          if (val.toLowerCase() != val) {
            return;
          }

          if (counts[val]) {
            visitedTwice = true;
          } else {
            counts[val] = true;
          }
        });

        if (visitedTwice && counts[nextNode]) {
          return;
        }
      }
    }

    toReturn.push(...getPossiblePaths(nextNode, nextVisited, part2));
  });

  return toReturn;
}

const part1 = getPossiblePaths('start', [], false);
console.log(`Part 1: ${part1.length}`);

const part2 = getPossiblePaths('start', [], true);
console.log(`Part 2: ${part2.length}`);

// const getNumPaths = (connections, condition = () => false) => {
//   const nodes = connections.reduce(
//     (map, [a, b]) => (
//       map.set(a, (map.get(a) || []).concat(b)),
//       map.set(b, (map.get(b) || []).concat(a))
//     ),
//     new Map()
//   );

//   const traverse = (node, path = []) =>
//     node === "end"
//       ? 1
//       : nodes
//           .get(node)
//           .filter(
//             n =>
//               n !== "start" &&
//               (n.toLowerCase() !== n || !path.includes(n) || condition(path))
//           )
//           .map(n => traverse(n, [...path, n], condition))
//           .reduce((sum, v) => sum + v, 0);
//   return traverse("start");
// };

// export const part1 = connections => getNumPaths(connections);
// export const part2 = connections =>
//   getNumPaths(
//     connections,
//     path =>
//       !path
//         .filter(v => v === v.toLowerCase())
//         .some((v, i, arr) => arr.indexOf(v) < i);

// part1(input) // ?
// part2(input) // ?
