let argv = process.argv.slice(2);

export const babySteps = (arr: string[]) =>
  arr.reduce((acc, curr): number => Number(acc) + Number(curr), 0);

console.log(babySteps(argv));
