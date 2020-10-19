import { promises as fs } from 'fs';
import totalFuel from '.';

describe('day-01', () => {
  it('should calculate total fuel', async () => {
    const data = await fs.readFile(`${__dirname}/input`, 'utf-8');
    const input = data.split('\n').map(Number);

    expect(totalFuel(input)).toStrictEqual(3239890);
  });
});
