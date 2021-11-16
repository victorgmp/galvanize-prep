function highestScoringWord(string) {
  // split string in words and convert to lowercase
  const arrayOfWords = string.toLowerCase().split(' ');

  const getCharValue = (char) => {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    return alphabet.indexOf(char) + 1;
  };

  // iterate characters in word and find it's value
  const getWordValue = (word) => {
    const charsArray = word.split('');
    return charsArray.reduce((acc, currValue) => {
      const charValue = getCharValue(currValue);
      if (charValue) return acc + charValue;

      return acc;
    }, 0);
  };

  // iterate words and find it's value
  const getWordsWithValues = (arr) => arr.reduce((acc, currWord) => {
    const wordValue = getWordValue(currWord);
    if (wordValue) {
      acc[currWord] = wordValue;
    }

    return { ...acc };
  }, {});

  // get words with values
  const wordsWithValuesObj = getWordsWithValues(arrayOfWords);
  const maxValue = Object
    .keys(wordsWithValuesObj)
    .reduce((a, b) => Math.max(a, wordsWithValuesObj[b]), -Infinity);

  // return the word with  highest score as a string
  // if two words have the same score, return the earliest in the original string.
  const result = Object
    .keys(wordsWithValuesObj)
    .filter((val) => wordsWithValuesObj[val] === maxValue);

  return result[0];
}

function assertEqual(actual, expected, testName) {
  if (actual === expected) {
    console.log('passed');
  } else {
    console.log(`FAILED [${testName}], expected "${expected}", but got "${actual}"`);
  }
}

const input1 = 'hola como estas';
const actual1 = highestScoringWord(input1);
const expected1 = 'estas';
assertEqual(actual1, expected1, 'estas is the word with max value');

const input2 = 'vamos a la playa';
const actual2 = highestScoringWord(input2);
const expected2 = 'vamos';
assertEqual(actual2, expected2, 'vamos is the word with max value');

const input3 = 'el carro gira';
const actual3 = highestScoringWord(input3);
const expected3 = 'carro';
assertEqual(actual3, expected3, 'carro is the word with max value');
