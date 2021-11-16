/* eslint-disable no-restricted-syntax */
// Skeleton

// FUNCTION DEFINITION(S)
function findMaxRepeatCountInWord(word) {
  // Break up individual word into individual letters.
  const arrayLetters = word.split('');
  // Count the instances of each letter
  const letterCount = {};
  for (let i = 0; i < arrayLetters.length; i++) {
    const letter = arrayLetters[i];
    if (!letterCount[letter]) {
      letterCount[letter] = 0;
    }

    letterCount[letter] += 1;
  }
  // Iterate all the counts and find the highest
  let max = 0;
  for (const letter in letterCount) {
    if (letterCount[letter] > max) {
      max = letterCount[letter];
    }
  }
  // Return this word's max repeat count
  return max;
}

function findFirstWordWithMostRepeatedChars(text) {
  let maxRepeatCountOverall = 0;
  let wordWithMaxRepeatCount = '';

  // Break up input text into words (space-delimited).
  const words = text.split(' ');
  // For each word...
  words.forEach((word) => {
    const repeatCountForWord = findMaxRepeatCountInWord(word);
    // If that max repeat count is higher than the overall max repeat count, then
    if (repeatCountForWord > maxRepeatCountOverall) {
      maxRepeatCountOverall = repeatCountForWord;
      wordWithMaxRepeatCount = word;
    }
  });

  return wordWithMaxRepeatCount;
}

// ASSERTION FUNCTION(S) TO BE USED
const testMaxRepeatWord = (actual, expected, testName) => {
  if (actual === expected) {
    console.log('passed');
  } else {
    console.log(`FAILED [${testName}] Expected "${expected}", but got "${actual}"`);
  }
};

// TESTS CASES
const actual1 = findMaxRepeatCountInWord('palabra');
testMaxRepeatWord(actual1, 3, "la letra 'a' se repite 3 veces");

const actual2 = findFirstWordWithMostRepeatedChars('entretenimiento casa hola');
testMaxRepeatWord(actual2, 'entretenimiento', "la palabra con mas letras repetidas es 'entretenimiento'!");
