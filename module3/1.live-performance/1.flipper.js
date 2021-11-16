// Flip every pair of characters in a string.

const flipPairs = (input) => {
  let flipedInput = '';
  let pointer = 0;

  while (pointer < input.length) {
    const actualString = input[pointer];
    let nextString = 0;

    if (input[pointer + 1]) {
      nextString = input[pointer + 1];
      pointer += 2;
    } else if (input[pointer + 1] === undefined) {
      flipedInput += input[pointer];
      break;
    } else {
      nextString = input[pointer + 2];
      pointer += 3;
    }

    flipedInput += nextString + actualString;
  }

  return flipedInput;
};

function assertEqual(actual, expected, testName) {
  if (actual === expected) {
    console.log('passed');
  } else {
    console.log(`FAILED [${testName}], expected "${expected}", but got "${actual}"`);
  }
}

// Example:
const input = 'check out how interesting this problem is, it\'s insanely interesting!';
const output = flipPairs(input);
console.log(output); // --> hcce kuo toh wnietertsni ghtsip orlbmei ,si 't sniasenyli tnreseitgn!

const expected = "hcce kuo toh wnietertsni ghtsip orlbmei ,si 't sniasenyli tnreseitgn!";

console.log(assertEqual(output, expected, 'flip strings'));
