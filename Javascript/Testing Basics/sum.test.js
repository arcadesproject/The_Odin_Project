const functions = require('./functions');
const sum = functions.sum;
const objectAssign = functions.objectAssign;
const nullFunction = functions.nullFunction;

// uses simple toBe() to check number
test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

// uses toEqual() to check object
test('oject assignment', () => {
  expect(objectAssign(1, 2)).toEqual({ one: 1, two: 2 });
});

// can check opposite of matcher using not.
test('adds 3 + 4 would equal 7, check it is not 6', () => {
  expect(sum(3, 4)).not.toBe(6);
});

// can check truthiness too, example with null
test('should return null and match truthiness', () => {
  expect(nullFunction(0)).toBeNull();
  expect(nullFunction(0)).toBeDefined();
  expect(nullFunction(0)).not.toBeUndefined();
  expect(nullFunction(0)).not.toBeTruthy();
  expect(nullFunction(0)).toBeFalsy();
});

// Numbers
// use toBe and toEqual
// Can also use toBeGreaterThan
// toBeGreatherThanOrEqual
// toBeLessThan
// toBeLessThanOrEqual
// For floating point use toBeCloseTo()

//Strings
//toMatch()
//not.toMatch()

//Arrays
//toContain() to check if it contains a value

//Exceptions
//toThrow() check if it throws an error
