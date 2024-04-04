import { readFile } from "node:fs";

const input = (await readFile(`${__dirname}/input`, 'utf-8')).split('\n');

interface Food {
  allergens: string[];
  ingredients: string[];
}

function parseFood(food: string): Food {
  const { groups } = food.match(/(?<ingredients>.*) \(contains (?<allergens>.*)\)/) || [];

  if (!groups) {
    throw new Error('Invalid input');
  }

  const { allergens, ingredients } = groups;

  return {
    allergens: allergens.split(', '),
    ingredients: ingredients.split(' '),
  };
}

function parseFoods(foods: string[]): Food[] {
  return foods.map(parseFood);
}

function part1(foods: string[]) {
  const parsedFoods = parseFoods(foods);
  const allergenMap = new Map<string, string[]>();
  const allergenSet = new Set<string>();
  let sum = 0;

  parsedFoods.forEach((food) => {
    food.allergens.forEach((allergen) => {
      if (!allergenMap.has(allergen)) {
        allergenMap.set(allergen, food.ingredients);
      } else {
        allergenMap.set(
          allergen,
          (allergenMap.get(allergen) || []).filter((ingredient) =>
            food.ingredients.includes(ingredient),
          ),
        );
      }
    });
  });

  Array.from(allergenMap.values()).forEach((allergens) => {
    allergens.forEach((allergen) => {
      allergenSet.add(allergen);
    });
  });

  parsedFoods.forEach((food) => {
    sum += food.ingredients.length;
    allergenSet.forEach((allergen) => {
      if (food.ingredients.includes(allergen)) {
        sum -= 1;
      }
    });
  });

  return sum;
}

// 2230
part1(input); // ?

// function part(input: string, part) {
//   if (part === 2) {
//     while (true) {
//       Object.keys(allergenMap).forEach((key1) => {
//         let possibilities = [...allergenMap[key1]];
//         Object.keys(allergenMap).forEach((key2) => {
//           if (key2 == key1) return;
//           possibilities = possibilities.filter((value) => !allergenMap[key2].includes(value));
//         });
//         if (possibilities.length >= 1) {
//           allergenMap[key1] = possibilities;
//         }
//       });
//       if (!Object.values(allergenMap).some((array) => array.length > 1)) break;
//     }
//     let answer = '';
//     Object.keys(allergenMap)
//       .sort()
//       .forEach((key) => {
//         answer += `${allergenMap[key][0]},`;
//       });
//     return answer.substr(0, answer.length - 1);
//   }
//   return null;
// }

// // 2230
// part(input, 1); // ?

// // qqskn,ccvnlbp,tcm,jnqcd,qjqb,xjqd,xhzr,cjxv
// part(input, 2); // ?
