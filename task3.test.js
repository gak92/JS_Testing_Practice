const Calculator = require('./task3.js');
const calculator = new Calculator();

describe('Addition Test', () => {
  test('2 + 2 is equal to 4', () => {
    expect(calculator.add(2, 2)).toBe(4);
  });

  test('1 + 3 is equal to 4', () => {
    expect(calculator.add(1, 3)).toBe(4);
  });

  test('10 + 20 is equal to 30', () => {
    expect(calculator.add(10, 20)).toBe(30);
  });
});

describe("Subraction Test", () => {
  test('2 - 2 is equal to 0', () => {
    expect(calculator.subtract(2, 2)).toBe(0);
  });

  test('10 - 3 is equal to 7', () => {
    expect(calculator.subtract(10, 3)).toBe(7);
  });

  test('100 - 20 is equal to 80', () => {
    expect(calculator.subtract(100, 20)).toBe(80);
  });
});

describe("Multiplication Test", () => {
  test('2 * 2 is equal to 4', () => {
    expect(calculator.multiply(2, 2)).toBe(4);
  });

  test('10 * 3 is equal to 30', () => {
    expect(calculator.multiply(10, 3)).toBe(30);
  });

  test('10 * 20 is equal to 200', () => {
    expect(calculator.multiply(10, 20)).toBe(200);
  });
});

describe("Division Test", () => {
  test('2 / 2 is equal to 1', () => {
    expect(calculator.divide(2, 2)).toBe(1);
  });

  test('9 / 3 is equal to 3', () => {
    expect(calculator.divide(9, 3)).toBe(3);
  });

  test('100 / 20 is equal to 5', () => {
    expect(calculator.divide(100, 20)).toBe(5);
  });
});
