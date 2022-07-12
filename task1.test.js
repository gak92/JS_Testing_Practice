const stringLength = require('./task1.js');

test('Length of "abc"', () => {
  expect(stringLength('abc')).toBe(3);
});

test('Should throw an error', () => {
  expect(() => stringLength("")).toThrow();
});

test('Should throw an error', () => {
  expect(() => stringLength("abcdefghijklmn")).toThrow();
});
