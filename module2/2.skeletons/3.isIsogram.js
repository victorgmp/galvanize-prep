// Skeleton

// FUNCTION DEFINITION(S)
// function isIsogram(text) {
//   const hashMap = {};

//   for (let i = 0; i < text.length; i++) {
//     const letter = text[i].toLowerCase();

//     if (!hashMap[letter]) {
//       hashMap[letter] = 0;
//     }

//     if (hashMap[letter] === 1) {
//       return false;
//     }

//     hashMap[letter] += 1;
//   }
//   return true;
// }
function isIsogram(text) {
  if (text === '') {
    return true;
  }

  const textToLower = text.toLowerCase();
  const arrayOfLetters = textToLower.split('');
  const setOfLetters = new Set(arrayOfLetters);

  console.log('arrayOfLetters', arrayOfLetters);
  console.log('setOfLetters', setOfLetters);

  return setOfLetters.size === text.length;
}

// ASSERTION FUNCTION(S) TO BE USED
const testIsIsogram = (actual, expected, testName) => {
  if (actual === expected) {
    console.log('passed');
  } else {
    console.log(`FAILED [${testName}] Expected "${expected}", but got "${actual}"`);
  }
};

// TESTS CASES
// const actual1 = isIsogram('hola');
// testIsIsogram(actual1, true, 'return true');

// const actual2 = isIsogram('perro');
// testIsIsogram(actual2, false, 'return false');

const actual3 = isIsogram('perRo');
testIsIsogram(actual3, false, 'return false');
