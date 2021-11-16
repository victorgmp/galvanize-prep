// You will be given an array that contains two strings. Your job is to create
// a function that will take those two strings and transpose them, so that the
// strings go from top to bottom instead of left to right.

// e.g. transposeTwoStrings(['Hello','World']);

// should return:
// H W
// e o
// l r
// l l
// o d

const transposeTwoStrings = (arrayOfStrings) => {
  const firstString = arrayOfStrings[0];
  const secondString = arrayOfStrings[1];

  let longerString;
  if (firstString >= secondString) {
    longerString = firstString;
  } else {
    longerString = secondString;
  }

  let transposeString = '';

  // iterate over length of the longer string
  for (let i = 0; i < longerString.length; i++) {
    // set first to first strings's current letter or empty space
    const firstCharacter = firstString[i] || ' ';
    // set second to second strings's current letter or empty space
    const secondCharacter = secondString[i] || ' ';
    // add first, space, second, and newline to result string
    transposeString += `${firstCharacter} ${secondCharacter}\n`;
  }

  return transposeString;
};

console.log(transposeTwoStrings(['Hello', 'World']));
