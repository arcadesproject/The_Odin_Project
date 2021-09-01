function capitalize(string) {
  return string[0].toUpperCase() + string.slice(1);
}

function reverseString(string) {
  return string.split('').reverse().join('');
}

calculator = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  divide: (a, b) => a / b,
  multiply: (a, b) => a * b,
};

function caesar(string, shift) {
  //if no shift simply return string
  if (shift === 0) {
    return string;
  }

  return string
    .split('')
    .map((character) => {
      const code = character.charCodeAt(0);
      //check if it's a letter
      if (!character.match(/[a-z]/i)) {
        return character;
      }
      //If it's a lowercase letter(over 90), otherwise
      // charCodeAt(0) is default index
      return character.charCodeAt(0) > 90
        ? String.fromCharCode(((code - 97 + shift) % 26) + 97)
        : String.fromCharCode(((code - 65 + shift) % 26) + 65);
    })
    .join('');
}

function analyzeArray(array) {
  const length = array.length;
  const average = array.reduce((a, b) => a + b) / length;
  const min = Math.min(...array);
  const max = Math.max(...array);
  return {
    average,
    min,
    max,
    length,
  };
}

module.exports = { capitalize, reverseString, calculator, caesar, analyzeArray };
