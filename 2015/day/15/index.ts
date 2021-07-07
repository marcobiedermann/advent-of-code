/* eslint-disable import/prefer-default-export */

const a = {
  capacity: 3,
  durability: 0,
  flavor: 0,
  texture: -3,
  calories: 2,
};

const b = {
  capacity: -3,
  durability: 3,
  flavor: 0,
  texture: 0,
  calories: 9,
};

const c = {
  capacity: -1,
  durability: 0,
  flavor: 4,
  texture: 0,
  calories: 1,
};

const d = {
  capacity: 0,
  durability: 0,
  flavor: -2,
  texture: 2,
  calories: 8,
};

function calculate(a, b, ai, bi) {
  const capacity = Math.max(0, ai * a.capacity + bi * b.capacity);
  const durability = Math.max(0, ai * a.durability + bi * b.durability);
  const flavor = Math.max(0, ai * a.flavor + bi * b.flavor);
  const texture = Math.max(0, ai * a.texture + bi * b.texture);

  return capacity * durability * flavor * texture;
}

function part1(input: string[]) {
  const results = [];

  for (let i = 0; i < 100; i += 1) {
    results.push(calculate(a, b, i, 100 - i));
  }

  const max = Math.max(...results);

  return max;
}

export { part1 };
