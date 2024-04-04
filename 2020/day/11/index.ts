// https://tranzystorek-io.github.io/paste/#XQAAAQCXDwAAAAAAAAA9iImGVD/UQZfk+oJTfwg2/VsJ0DpNkr2zGUvTQlsh3wS86ErCiIs+8eQ8KCZypeeAffu2n/6Zt4Vj2eYTUaeNvBccbo3Quw+b3AP99hmOQXzoxeIaIkJx0pCwzAS2coLYUrXh47MbP/VOVcV/fRpvaXDRhKlcnhBZM88jKSFRNjUewmxgZAbrCQVgrMM7YGYhHRjDfxOlj8U0kwNluFkMfnHHI9IunwIwwK46QsXQus3gsfdJBztZsrA0jYmM9D1Os2eNIcqqMFFP0CeL9tlvkbLcyyIpMnkZfi4OEfmSQJ7VxV4NHwhsCu4LeScQjr+qa9BxgHd82VSWYdNWb15R50DjHTW7gZer+xp2HR0VK1aA6SgKA/lKLNs5DqyIqFKYAH9zbZo+lITjGPn2pf+lRvD67WTpXah3X4dg9izc6maF3sna1K0hL9Ii9HqrRi/tR3mZtr5tUhARVLgMf1qdC4eKfiFpIScTA560oIQ/shPGFK/p22APPpdC/YiBqw1h0iiuAAB6mPRTWcPXU3HZbCz+UoAReuBRw6pA5bIcAexNSkfonG00DRguGAz5e9gzlPetjVpg60VbKiuQ84vXH4hQS7Z4+S27nfJDzW/To54UI3PR2MQw6ZxJI+GT72vqNMHiZ2s8D+73EfXD33tVZpC2zhleVetcha3H/stArC2c/ZoRHpp3nkHk9SfOW81fJliAGFGFVvzjg8dUL2sSNhhOeObzMlIdLalpBHlwMjUrxa3ORTb+veJUSs5e4OPQWHZETLFtjCy1fvAEaZhXN0h7PJq2G5OpAYba0KpQPKZl1PwEPn6KgjeJ85KoNovpe0hJj5M4P+ry2OS8GkN6BCRcgDlepyYmOdqO5e/OjIfLwNhdc8+kzzhjWGErTS/Pl8wDW9hsjUp7OL8cO4HobDJmkLF7tMF/OkF0GPg43eHN9ytRT2GhSGKlKNDP21SLE9EnTZgN9GJ8WDnsmlfygrGaZ9Mw/ysOux2NA0NDcvIC1Yf2iJfoY2LDF/6L/bZmpYyU7nfEMaZHS+77tjC82VBCYU2W0dtyoa5JTaOObC7txWV0nOOyUmW3WXLBjGyNW+BKPIxfi46YpJBrvjoRZIoQ2VvaOCNTZxDZQwbyFQdixzUvKHeXcd6ayzH5bvmHTXO29In+x/MOPh2+xjtqwyFq/qpMxxMMtA3ODsDVzuylKoRl50ffQP+9zdlDoMZjZuYx6OGYTwzC9YSTrhq+pf6rb7AaOZVciJjz70PHJmp2EZvt9BsMy8OZ3lzQV/pWLTr45YImHHfTeKU2X2Jg4XP+nN13TIYX1TOx/jPm8Irefm1RdGhikdt0DEKz4ac4ufuusRPrfyc8CQ7jsyC8MT+odyLq96d/myXEZFe78wJO9lHav1XSB6EuIs1/ID77zeUG+EEtIs5Kpi7OLyuvZkGzENkImnrHCnIUJqwwrL/90hVQ


const input = await readFile(`${__dirname}/input.example`, 'utf-8')
  .split('\n')
  .map((row) => row.split(''));

const EMPTY = 'L';
const FLOOR = '.';
const OCCUPIED = '#';

function getNeighbors(grid: string[][], x: number, y: number) {
  return [
    [x, y - 1], // top
    [x + 1, y - 1], // top right
    [x + 1, y], // right
    [x + 1, y + 1], // bottom right
    [x, y + 1], // bottom
    [x - 1, y + 1], // bottom left
    [x - 1, y], // left
    [x - 1, y - 1], // top left
  ].filter((neighbor) => {
    const [x, y] = neighbor;

    return grid[y] && grid[y][x];
  });
}

function part1(grid: string[][]): number {
  for (let y = 0; y < grid.length; y += 1) {
    for (let x = 0; x < grid[y].length; x += 1) {
      const cell = grid[y][x];
      const neighbors = getNeighbors(grid, x, y);
    }
  }
}

//                37
//                2270
part1(input); // ?

function part2(input: string[][]): number {}

//               26
//               2042
// part2(input) //?

export { part1, part2 };
