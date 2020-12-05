function parseSeat(seat: string) {
  const { groups } = seat.match(/(?<rows>[BF]{7})(?<columns>[LR]{3})/) || [];

  if (!groups) {
    throw new Error('Invalid input');
  }

  const { columns, rows } = groups;

  return {
    columns,
    rows,
  };
}

function getSeat(rows: string, start: number, end: number): number {
  let lower = start;
  let upper = end;

  const character = rows.slice(0, 1);
  const rest = rows.slice(1);

  if (start === end) {
    return start;
  }

  if (character === 'F' || character === 'L') {
    upper = Math.floor(end - (end - start) / 2);
  }

  if (character === 'B' || character === 'R') {
    lower = Math.ceil(start + (end - start) / 2);
  }

  return getSeat(rest, lower, upper);
}

function mapSeat(seat: string): number {
  const { columns, rows } = parseSeat(seat);
  const row = getSeat(rows, 0, 127);
  const column = getSeat(columns, 0, 7);

  return row * 8 + column;
}

function mapSeats(seats: string[]): number[] {
  return seats.map(mapSeat);
}

function part1(seats: string[]): number {
  const mappedSeats = mapSeats(seats);

  return Math.max(...mappedSeats);
}

function part2(seats: string[]): number {
  const mappedSeats = mapSeats(seats);

  const min = Math.min(...mappedSeats);
  const max = Math.max(...mappedSeats);
  const set = new Set(mappedSeats);

  for (let i = min + 1; i < max - 1; i += 1) {
    if (!set.has(i)) {
      return i;
    }
  }

  return -1;
}

export { part1, part2 };
