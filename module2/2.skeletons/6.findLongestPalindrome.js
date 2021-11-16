// Skeleton

// FUNCTION DEFINITION(S)
function findLongestPalindrome(sentence) {
  // split sentence into words
  const arrayWord = sentence.split(' ');
  // iterate words and collect the palindromes
  const palindromeList = arrayWord.reduce((acc, word) => {
    if (isPalindrome(word)) {
      return [...acc, word];
    }

    return acc;
  }, []);
  // sort the list of palindromes by word length
  // const palindromeListSorted = palindromeList.sort((a, b) => (b > a ? 1 : -1));
  const palindromeListSorted = palindromeList.sort(sortAscendingByLength);
  // return the largest item in the sorted list
  const baseItem = palindromeListSorted[0];
  const largestItem = palindromeListSorted.reduce((acc, word) => {
    if (word.length >= acc.length) {
      return word;
    }

    return acc;
  }, baseItem);

  return largestItem;
}

function reverseString(string) {
  return string.split('').reverse().join('');
}

function isPalindrome(word) {
  // hint: you can detect palindromes by comparing a string to its reverse
  const wordToLower = word.toLowerCase();
  return wordToLower === reverseString(wordToLower);
}

function sortAscendingByLength(a, b) {
  if (a.length > b.length) {
    return 1;
  } if (a.length < b.length) {
    return -1;
  }
  return 0;
}

// ASSERTION FUNCTION(S) TO BE USED
// const testReverseString = (original, reverse) => {
//   return original === reverse;
// }

// const testIsPalindrome

const testFindLongestPalindrome = (actual, expected, testName) => {
  if (actual === expected) {
    console.log('passed');
  } else {
    console.log(`FAILED [${testName}] Expected "${expected}", but got "${actual}"`);
  }
};

// TESTS CASES
const actual1 = findLongestPalindrome('ana racecar level carro');
const expected1 = 'racecar';
testFindLongestPalindrome(actual1, expected1, 'get the longest palindrome');

const actual2 = findLongestPalindrome('water drink');
const expected2 = 'racecar';
testFindLongestPalindrome(actual2, expected2, 'no palindromes');
