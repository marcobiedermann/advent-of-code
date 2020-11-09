/* eslint-disable import/prefer-default-export, no-eval */

interface Route {
  from: string;
  to: string;
  distance: number;
}

function parseRoute(route: string): Route {
  const { groups } = route.match(/(?<from>\w+) to (?<to>\w+) = (?<distance>\d+)/) || [];

  if (!groups) {
    throw new Error('Invalid input');
  }

  const { from, to, distance } = groups;

  return {
    from,
    to,
    distance: parseInt(distance, 10),
  };
}

function permute<T>(a: T[]): T[][] {
  if (!a.length) {
    return [a];
  }

  return a.reduce(
    (accumulator: T[][], currentValue, index) => [
      ...accumulator,
      ...permute([...a.slice(0, index), ...a.slice(index + 1)]).map((x) => [currentValue, ...x]),
    ],
    [],
  );
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

  const allRoutes = permute(Array.from(places));
  const mappedRoutes = allRoutes.map((allRoute) => mapRoutes(allRoute, distances));

  return Math.min(...mappedRoutes);
}

export { part1 };
