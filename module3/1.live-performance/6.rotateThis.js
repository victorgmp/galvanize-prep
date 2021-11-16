// Is one string a rotated version of another?

// For example:
// String 1: 'hello world'
// String 2: 'orldhello w'

// Extra hint: (click the drop down to ROT7 to see hint)
// If you double the string, you'll be able to find another string inside the doubled string using familiar String methods.

// Doubled string: 'hello worldhello world'
// Search w/in it: '       orldhello w    ''

const isRotated = (str1, str2) => {
  if (str1 === str2) {
    return true;
  }
  // turn str1 into an array
  const arr1 = str1.split('');
  // take the last value of arra1 and put it at the front
  const lastValue = arr1.pop();
  arr1.unshift(lastValue);

  // while string version of arr1 not equal to original str1
  while (arr1.join('') !== str1) {
    // compare the string version of arr1 with str2
    if (arr1.join('') === str2) {
      // return true if they are the same
      return true;
    }
    // take the last value of arr1 and put it at the front
    const lastValue = arr1.pop();
    arr1.unshift(lastValue);
  }
};

const isStringRotatedVersion = (strOne, strTwo) => {
  // doble the first string
  const doubleStringOne = strOne + strOne;

  if (doubleStringOne.indexOf(strTwo) !== -1) {
    return true;
  }
  return false;
};

// isStringRotatedVersion('hello world', 'orldhello w');

function assertEqual(actual, expected, testName) {
  if (actual === expected) {
    console.log('passed');
  } else {
    console.log(`FAILED [${testName}], expected "${expected}", but got "${actual}"`);
  }
}

const actual1 = isStringRotatedVersion('hello world', 'orldhello w');
const expect1 = true;
assertEqual(actual1, expect1, 'the first string contains the second substring');
