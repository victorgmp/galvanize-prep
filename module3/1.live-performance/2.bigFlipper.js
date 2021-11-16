// Flip every chunk of n characters in a string, where n is any positive integer greater than 1.

// const flipEveryNChars = (string, num) => {
//   let flipedString = '';
//   let start = 0;
//   let end = num;

//   while (end <= string.length) {
//     const chunk = string.slice(start, end);
//     const splitted = chunk.split('');
//     const reversed = splitted.reverse();
//     const joined = reversed.join('');

//     start = end;
//     end += num;
//     flipedString += joined;
//   }

//   return flipedString;
// };

const flipEveryNChars = (string, n) => {
  let flipedString = '';
  const characters = string.split('');

  for (let i = 0; i < characters.length; i += n) {
    const chunk = characters.slice(i, i + n);
    const reversed = chunk.reverse();
    const joined = reversed.join('');

    flipedString += joined;
  }

  return flipedString;
};

function assertEqual(actual, expected, testName) {
  if (actual === expected) {
    console.log('passed');
  } else {
    console.log(`FAILED [${testName}], expected "${expected}", but got "${actual}"`);
  }
}

// Example:
const input = 'a short example';
const output = flipEveryNChars(input, 5);
console.log(output); // --> ohs axe trelpma
const expected = 'ohs axe trelpma';

console.log(assertEqual(output, expected, 'flip every N chars succed'));
