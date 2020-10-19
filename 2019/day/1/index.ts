function fuel(mass: number): number {
  return Math.floor(mass / 3) - 2;
}

function totalFuel(modules: number[]): number {
  return modules.reduce((accumulator, currentValue) => {
    return accumulator + fuel(currentValue);
  }, 0);
}

export default totalFuel;
