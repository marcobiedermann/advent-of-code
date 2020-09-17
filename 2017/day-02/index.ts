function part1(rows: number[][]): number {
  return rows.reduce((accumulator, currentValue) => {
    const min = Math.min(...currentValue);
    const max = Math.max(...currentValue);
    const diff = max - min;

    return accumulator + diff;
  }, 0);
}

export { part1 };
