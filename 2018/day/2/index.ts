/* eslint-disable import/prefer-default-export */

function part1(boxes: string[]): number {
  let twoLetters = 0;
  let threeLetters = 0;

  boxes.forEach((box) => {
    const map = new Map<string, number>();

    box.split('').forEach((letter) => {
      map.set(letter, (map.get(letter) || 0) + 1);
    });

    const values = [...map.values()];

    if (values.includes(2)) {
      twoLetters += 1;
    }

    if (values.includes(3)) {
      threeLetters += 1;
    }
  });

  return twoLetters * threeLetters;
}

export { part1 };
