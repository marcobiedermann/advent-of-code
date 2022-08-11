import { readFileSync } from 'fs';

const sample = readFileSync(`${__dirname}/input.sample`, 'utf-8');

function parseRow(row: string) {
  return row.split('').map(Number);
}

function parseGrid(grid: string): number[][] {
  return grid.split('\n').map(parseRow);
}

function part1(grid: string) {
  const parsedGrid = parseGrid(grid);

  const lowPoints = [];

  for (let i = 0; i < parsedGrid.length; i += 1) {
    const row = parsedGrid[i];

    for (let j = 0; j < row.length; j += 1) {
      const point = parsedGrid[i][j];

      const top = parsedGrid[i - 1]?.[j];
      const bottom = parsedGrid[i + 1]?.[j];
      const left = parsedGrid[i]?.[j - 1];
      const right = parsedGrid[i]?.[j + 1];

      if (point < top && point < bottom && point < left && point < right) {
        lowPoints.push(point);
      }
    }
  }

  lowPoints;
}

part1(sample);

// // challenge-1.js

// const fs = require('fs');

// // Initialize the program
// init();

// /**
//  * Initializing function, the program begins here
//  */
// function init() {
//   // Grab the input from the file
//   const input = parseInput(`${__dirname}/input`, '\n');
//   // Calculate the risk level from the lowest points
//   const riskLevelSum = findLowPointsSum(input);
//   console.log(`Answer: ${riskLevelSum}`);
// }

// /**
//  * Grabs the inputs from input.txt, then parses them and returns the
//  * outputs only
//  * @param {string} filename The filename of the input to parse
//  * @param {string} splitChar The character(s) to split the lines by
//  * @returns {array} An array of outputs only
//  */
// function parseInput(fileName, splitChar) {
//   // Reads in the file as a string, splits along splitChar for each line
//   return fs.readFileSync(fileName, 'utf-8').split(splitChar);
// }

// /**
//  * Finds the lowest points in the 2D string array, adds 1 to them and
//  * adds those sums to a "risk level" sum to be returned
//  * @param {array<string>} input a 2D array of strings as input
//  * @returns {number} the risk level sum - all the lowest points (+1) summed
//  */
// function findLowPointsSum(input) {
//   let riskLevelSum = 0;
//   for (let i = 0; i < input.length; i++) {
//     for (let j = 0; j < input[i].length; j++) {
//       // Directions that are higher - North, East, South, West order
//       const dirs = [true, true, true, true];
//       // Check North
//       if (i != 0) dirs[0] = input[i - 1][j] > input[i][j];
//       // Check East
//       if (j != input[i].length - 1) dirs[1] = input[i][j + 1] > input[i][j];
//       // Check South
//       if (i != input.length - 1) dirs[2] = input[i + 1][j] > input[i][j];
//       // Check West
//       if (j != 0) dirs[3] = input[i][j - 1] > input[i][j];
//       // if they all check out, add to the sum
//       if (dirs[0] && dirs[1] && dirs[2] && dirs[3]) {
//         riskLevelSum += Number(input[i][j]) + 1;
//       }
//     }
//   }
//   return riskLevelSum;
// }

// challenge-2.js

// const fs = require('fs');

// // Initialize the program
// init();

// /**
//  * Initializing function, the program begins here
//  */
// function init() {
//   // Grab the input from the file
//   const input = parseInput(`${__dirname}/input`, '\n');
//   // Find the coordinates of the lowest points
//   const lowPointCoords = findLowPoints(input);

//   // Find the size of all of the basins based on
//   // the found low point coordinates
//   let basinSizes = [];
//   lowPointCoords.forEach((coord) => {
//     basinSizes.push(getBasinSize(coord, input));
//   });

//   // Sort the basin sizes from largest to smallest
//   basinSizes = basinSizes.sort((a, b) => b - a);
//   // Calculate the answer and log it
//   const answer = basinSizes[0] * basinSizes[1] * basinSizes[2];
//   console.log(`Answer: ${answer}`);
// }

// /**
//  * Grabs the inputs from input.txt, then parses them and returns the
//  * outputs only
//  * @param {string} filename The filename of the input to parse
//  * @param {string} splitChar The character(s) to split the lines by
//  * @returns {array} An array of outputs only
//  */
// function parseInput(fileName, splitChar) {
//   // Reads in the file as a string, splits along splitChar for each line
//   return fs.readFileSync(fileName, 'utf-8').split(splitChar);
// }

// /**
//  * Finds the lowest points in the 2D string array and adds their coordinates
//  * to an array in the format 'j,i' (e.g. x,y)
//  * @param {array<string>} input a 2D array of strings as input
//  * @returns {array} the array of coordinates of the lowest points in the
//  *                  2D array
//  */
// function findLowPoints(input) {
//   const lowPointCoords = [];
//   for (let i = 0; i < input.length; i++) {
//     for (let j = 0; j < input[i].length; j++) {
//       // Directions surrounding point - North, East, South, West order
//       const dirs = [true, true, true, true];
//       // Check North
//       if (i != 0) dirs[0] = input[i - 1][j] > input[i][j];
//       // Check East
//       if (j != input[i].length - 1) dirs[1] = input[i][j + 1] > input[i][j];
//       // Check South
//       if (i != input.length - 1) dirs[2] = input[i + 1][j] > input[i][j];
//       // Check West
//       if (j != 0) dirs[3] = input[i][j - 1] > input[i][j];
//       // If they all check out, add the coordinate to the array
//       if (dirs[0] && dirs[1] && dirs[2] && dirs[3]) {
//         lowPointCoords.push(`${j},${i}`);
//       }
//     }
//   }
//   return lowPointCoords;
// }

// /**
//  * Grab the number of points in the basin surrounding the lowest point
//  * coordinate that was given
//  * @param {string} coord coordinate in the format 'j,i' (x,y in normal plane)
//  *                       (strings are used as they are easier to check if they
//  *                        are in the array already)
//  * @returns {number} the number of points in the given basin
//  */
// function getBasinSize(coord, input) {
//   const basinPoints = []; // points in the basin
//   const basinQueue = [coord]; // queue to be checked
//   const checkedPoints = []; // points that have already been checked
//   // The maximum length the I and J points can be in the 2D array
//   const maxI = input.length - 1;
//   const maxJ = input[0].length - 1;

//   /**
//    * Checks the given point to see if it can be added to basinPoints, adds
//    * surrounding points to queue if applicable
//    * @param {string} point coordinate in the format 'j,i' (x,y in normal plane)
//    */
//   function _checkSurrounding(point) {
//     checkedPoints.push(point); // Add to checked point list
//     // parse point from string
//     const newPoint = point.split(',').map((num) => Number(num));
//     const i = newPoint[1];
//     const j = newPoint[0];
//     // Ignore if the point is over 9, it's a barrier
//     if (input[i][j] != 9) {
//       // Add to basin point if not already in there
//       if (!basinPoints.includes(point)) {
//         basinPoints.push(point);
//       }
//       // Check point in the north
//       if (i > 0 && !checkedPoints.includes(`${j},${i - 1}`)) {
//         basinQueue.push(`${j},${i - 1}`);
//       }
//       // Check point in the east
//       if (j < maxJ && !checkedPoints.includes(`${j + 1},${i}`)) {
//         basinQueue.push(`${j + 1},${i}`);
//       }
//       // Check point in the south
//       if (i < maxI && !checkedPoints.includes(`${j},${i + 1}`)) {
//         basinQueue.push(`${j},${i + 1}`);
//       }
//       // Check point in the west
//       if (j > 0 && !checkedPoints.includes(`${j - 1},${i}`)) {
//         basinQueue.push(`${j - 1},${i}`);
//       }
//     }
//   }

//   // Continue to go through the basinQueue until empty
//   while (basinQueue.length != 0) {
//     _checkSurrounding(basinQueue.pop());
//   }

//   // Return the number of points in the basin
//   return basinPoints.length;
// }
