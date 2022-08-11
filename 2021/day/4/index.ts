import { readFileSync } from 'fs';

const sample = readFileSync(`${__dirname}/input.sample`, 'utf-8');

function parseOrders(string: string): number[] {
  return string.split(',').map(Number);
}

interface Column {
  value: number;
  marked: boolean;
}

type Row = Column[];

type Board = Row[];

type Order = number;

function parseBoards(boards: string[]): Board[] {
  return boards.map((board) =>
    board.split('\n').map((row) =>
      row
        .split(' ')
        .filter(Boolean)
        .map((cell) => ({
          value: Number(cell),
          marked: false,
        })),
    ),
  );
}

function markColumn(grid: Board, order: Order): boolean {
  for (let i = 0; i < grid.length; i += 1) {
    const row = grid[i];

    for (let j = 0; j < row.length; j += 1) {
      const column = row[j];

      if (column.value === order) {
        column.marked = true;
        return true;
      }
    }
  }

  return false;
}

function checkRows(grid: Board): boolean {
  for (let i = 0; i < grid.length; i += 1) {
    const row = grid[i];

    if (row.every((column) => column.marked)) {
      return true;
    }
  }

  return false;
}

function checkColumns(grid: Board): boolean {
  for (let i = 0; i < grid.length; i += 1) {
    const row = grid[i];
    let match = true;

    for (let j = 0; j < row.length; j += 1) {
      if (!grid[j][i].marked) {
        match = false;
        break;
      }
    }

    if (match) {
      return true;
    }
  }

  return false;
}

function hasWon(grid: Board): boolean {
  return checkRows(grid) || checkColumns(grid);
}

function part1(input: string) {
  const [orders, ...boards] = input.split('\n\n');

  const parsedOrders = parseOrders(orders);
  const parsedBoards = parseBoards(boards);

  let winningBoard = null;

  for (let i = 0; i < parsedOrders.length; i += 1) {
    const order = parsedOrders[i];

    for (let j = 0; j < parsedBoards.length; j += 1) {
      const board = parsedBoards[j];

      const found = markColumn(board, order);
      if (found && hasWon(board)) {
        winningBoard = board;
        break;
      }
    }
  }

  console.log(winningBoard?.map((row) => row.map((column) => column.value)));
}

part1(sample); // ?
