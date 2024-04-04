import { readFileSync } from 'node:fs';

const input = readFileSync(`${__dirname}/input`, 'utf-8').split('\n');

function part1(instructions: string[]) {
  const flipped = new Set();

  instructions.forEach((instruction) => {
    let x = 0;
    let y = 0;

    for (let index = 0; index < instruction.length; index += 1) {
      const current = instruction[index];
      const next = instruction[index + 1];

      if (current === 'n') {
        y -= 1;

        if (next === 'w') {
          x -= 1;
        }

        index += 1;
      } else if (current === 's') {
        y += 1;

        if (next === 'e') {
          x += 1;
        }

        index += 1;
      } else if (current === 'w') {
        x -= 1;
      } else if (current === 'e') {
        x += 1;
      }
    }

    const element = [x, y].toString();

    if (flipped.has(element)) {
      flipped.delete(element);
    } else {
      flipped.add(element);
    }
  });

  return flipped.size;
}

//                  373
part1(input); // ?

function part2() {}

// function part2(data) {
//   const instructions = data.split('\n');
//   let flipped = new Set();
//   let tiles = {};
//   for (const instruction of instructions) {
//     let x = 0;
//     let y = 0;
//     for (let i = 0; i < instruction.length; i++) {
//       const c = instruction[i];
//       const n = instruction[i + 1];
//       if (c == 'n') {
//         y--;
//         if (n == 'w') {
//           x--;
//         }
//         i++;
//       } else if (c == 's') {
//         y++;
//         if (n == 'e') {
//           x++;
//         }
//         i++;
//       } else if (c == 'w') {
//         x--;
//       } else if (c == 'e') {
//         x++;
//       }
//     }
//     if (flipped.has([x, y].toString())) {
//       flipped.delete([x, y].toString());
//     } else {
//       flipped.add([x, y].toString());
//       tiles[[x, y]] = [x, y];
//       tiles[[x - 1, y - 1]] = [x - 1, y - 1];
//       tiles[[x, y - 1]] = [x, y - 1];
//       tiles[[x, y + 1]] = [x, y + 1];
//       tiles[[x + 1, y + 1]] = [x + 1, y + 1];
//       tiles[[x - 1, y]] = [x - 1, y];
//       tiles[[x + 1, y]] = [x + 1, y];
//     }
//   }
//   for (let i = 0; i < 100; i++) {
//     const newFlipped = new Set();
//     const newTiles = {};
//     for (const [x, y] of Object.values(tiles)) {
//       let neighbors = 0;
//       neighbors += flipped.has([x - 1, y - 1].toString());
//       neighbors += flipped.has([x, y - 1].toString());
//       neighbors += flipped.has([x, y + 1].toString());
//       neighbors += flipped.has([x + 1, y + 1].toString());
//       neighbors += flipped.has([x - 1, y].toString());
//       neighbors += flipped.has([x + 1, y].toString());
//       if (
//         (flipped.has([x, y].toString()) && neighbors != 0 && neighbors <= 2) ||
//         (!flipped.has([x, y].toString()) && neighbors == 2)
//       ) {
//         newFlipped.add([x, y].toString());
//         newTiles[[x, y]] = [x, y];
//         newTiles[[x - 1, y - 1]] = [x - 1, y - 1];
//         newTiles[[x, y - 1]] = [x, y - 1];
//         newTiles[[x, y + 1]] = [x, y + 1];
//         newTiles[[x + 1, y + 1]] = [x + 1, y + 1];
//         newTiles[[x - 1, y]] = [x - 1, y];
//         newTiles[[x + 1, y]] = [x + 1, y];
//       }
//     }
//     tiles = newTiles;
//     flipped = newFlipped;
//   }
//   console.log(`Black tiles (part 1): ${flipped.size}`);
// }

// // 3917
// part2(input);

export { part1, part2 };
