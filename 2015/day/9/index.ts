import { RADIX } from '../../../utils/math';

function permutater<T>(arr: T[]) {
  const result: T[][] = [];

  function permute(accumulator: T[], memo: T[] = []) {
    if (!accumulator.length) {
      result.push(memo);
    } else {
      for (let i = 0; i < accumulator.length; i += 1) {
        const current = accumulator.slice();
        const next = current.splice(i, 1);

        permute(current.slice(), memo.concat(next));
      }
    }
  }

  permute(arr);

  return result;
}

interface Route {
  from: string;
  to: string;
  distance: number;
}

function parseRoute(route: string): Route {
  const { groups } = route.match(/(?<from>\w+) to (?<to>\w+) = (?<distance>\d+)/);
  const { from, to, distance } = groups;

  return {
    from,
    to,
    distance: parseInt(distance, RADIX),
  };
}

function mapRoutes(routes: string[], distances: Map<string, number>): number {
  let total = 0;

  for (let i = 0; i < routes.length - 1; i += 1) {
    const current = routes[i];
    const next = routes[i + 1];

    total += distances.get(`${current} -> ${next}`) || 0;
  }

  return total;
}

function part1(routes: string[]): number {
  const distances = new Map<string, number>();
  const places = new Set<string>();

  routes.forEach((route) => {
    const { from, to, distance } = parseRoute(route);

    distances.set(`${from} -> ${to}`, distance);
    distances.set(`${to} -> ${from}`, distance);

    places.add(from);
    places.add(to);
  });

  const allRoutes = permutater(Array.from(places));
  const mappedRoutes = allRoutes.map((allRoute) => mapRoutes(allRoute, distances));

  return Math.min(...mappedRoutes);
}

export { part1 };
