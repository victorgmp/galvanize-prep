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

function findLongestPalindrome(sentence) {
  // split sentence into words
  const arrayOfWords = sentence.split(' ');
  // iterate words and collect the palindromes
  const palindromeList = arrayOfWords.reduce((acc, word) => {
    if (isPalindrome(word)) {
      return [...acc, word];
    }

    return acc;
  }, []);

  // const palindromeListSorted = palindromeList.sort((a, b) => (b > a ? 1 : -1));
  // sort the list of palindromes by word length
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

console.log(findLongestPalindrome('ana racecar level carro'));
