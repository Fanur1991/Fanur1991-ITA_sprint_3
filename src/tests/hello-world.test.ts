import { sayHelloHandle } from '../exerciseFiles/hello-world';

describe('HELLO WORLD test', () => {
  test('Should return HELLO WORLD in console', () => {
    const logSpy = jest.spyOn(console, 'log').mockImplementation();

    sayHelloHandle();
    expect(logSpy).toHaveBeenCalledTimes(1);
    expect(logSpy).toHaveBeenCalledWith('HELLO WORLD');
  });
});
