let argv = process.argv.slice(2);

const getSumOfNumbers = () =>
  argv.reduce((acc, curr): number => Number(acc) + Number(curr), 0);

console.log(getSumOfNumbers());
