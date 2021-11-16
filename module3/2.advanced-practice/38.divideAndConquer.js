function search(array, value) {
  // Add left and right variables below
  let left = 0;
  let right = array.length;

  while (right > left) {
    // Add indexToCheck calculation below
    const indexToCheck = Math.floor((left + right) / 2);
    const checking = array[indexToCheck];

    if (checking === value) {
      return indexToCheck;
    }
    if (value > checking) {
      left = indexToCheck + 1;
    } else {
      right = indexToCheck;
    }
  }

  return null;
}

const arr = [1, 3, 16, 22, 31, 33, 34];
const result = search(arr, 31);
console.log(result); // --> 4
