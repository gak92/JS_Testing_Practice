const reverseString = require('./task2.js');

test('Reverse of string "abc"', () => {
  expect(reverseString('abcde')).toBe('edcba');
});