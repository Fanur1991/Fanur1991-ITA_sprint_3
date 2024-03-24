import { babySteps } from '../exerciseFiles/baby-steps';

describe('Baby steps function test', () => {
  test('Should return sum of array', () => {
    const arrOfPositiveNumbers: string[] = ['5', '4', '11'];
    const arrOfNegativeNumbers: string[] = ['-5', '-4', '-11'];

    expect(babySteps(arrOfPositiveNumbers)).toBe(20);
    expect(babySteps(arrOfNegativeNumbers)).toBe(-20);
  });
});
