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

console.log(isIsogram('perRo'));
