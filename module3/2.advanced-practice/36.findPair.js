function findPairForSum(array, targetSum) {
  const values = {};

  return array.reduce((acc, currValue) => {
    const neededValue = targetSum - currValue;
    const valueInHashMap = values[neededValue];

    if (valueInHashMap) {
      return [valueInHashMap, currValue];
    }

    values[currValue] = currValue;

    return acc;
  }, []);
}

const pair = findPairForSum([3, 34, 4, 12, 5, 2], 7);
console.log(pair); // --> [4, 5]
