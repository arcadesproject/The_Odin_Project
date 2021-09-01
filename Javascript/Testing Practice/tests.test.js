const { expect, test } = require('@jest/globals');
const tests = require('./tests');
const capitalize = tests.capitalize;
const reverseString = tests.reverseString;
const calculator = tests.calculator;
const caesar = tests.caesar;
const analyzeArray = tests.analyzeArray;

test('takes a string and returns that string with the first character capitalized', () => {
  expect(capitalize('test sentence.')).toMatch('Test sentence.');
});

test('takes a string and returns it reversed', () => {
  expect(reverseString('Test.')).toMatch('.tseT');
});

test('checks calculator object functions work', () => {
  expect(calculator.add(1, 2)).toBe(3);
  expect(calculator.subtract(15, 11)).toBe(4);
  expect(calculator.divide(18, 3)).toBe(6);
  expect(calculator.multiply(12, 6)).toBe(72);
});

describe('caesar cipher tests', () => {
  test('wrapping z to a', () => {
    expect(caesar('zoo', 2)).toMatch('bqq');
  });
  test('keeping the same case', () => {
    expect(caesar('heLlO TEsTZ', 1)).toMatch('ifMmP UFtUA');
  });
  test('Punctuations tests', () => {
    expect(caesar('?!?"£ Test', 1)).toMatch('?!?"£ Uftu');
  });
  test('When there is no shift', () => {
    expect(caesar('Test', 0)).toMatch('Test');
  });
  test('Check negative shift', () => {
    expect(caesar('Test', -1)).toMatch('Sdrs');
  });
  test('High number shift', () => {
    expect(caesar('heLlO TEsTZ', 131)).toMatch('ifMmP UFtUA');
  });
});

test('takes an array and returns object with min, max, average and length', () => {
  expect(analyzeArray([1, 2, 3, 4, 5])).toEqual({
    average: 3,
    min: 1,
    max: 5,
    length: 5,
  });
});
