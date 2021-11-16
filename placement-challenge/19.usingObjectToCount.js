/* eslint-disable no-restricted-syntax */
function countAllCharacters(str) {
  const objCount = {};

  for (const s of str) {
    // console.log('s', s)
    if (!objCount[s]) {
      objCount[s] = 0;
    }

    objCount[s] += 1;
  }

  return objCount;
}
