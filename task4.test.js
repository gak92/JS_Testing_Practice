const capitalize = require('./task4.js');

test('Capitalize first letter of "abc"', () => {
  expect(capitalize("abc")).toBe('Abc');
});
