// create everything for this problem, functions, assertion function, and test cases
const getShoesWithLaceInName = (shoes) => shoes.filter((shoe) => shoe.name.includes('lace'));

const getTargetWordIndex = (words) => words.reduce((acc, value) => {
  if (value.includes('lace')) {
    return words.indexOf(value);
  }

  return acc;
}, -1);

const splitShoeName = (shoes) => shoes.map((shoe) => {
  const nameWords = shoe.name.split(' ');
  const targetWordIndex = getTargetWordIndex(nameWords);
  return { nameWords, targetWordIndex };
});

// call your function "generateLaceDetails", and let it take the inventory as its parameter
function generateLaceDetails(inventory) {
  const shoesWithLaceInName = inventory.reduce((acc, value) => {
    const { shoes } = value;
    const filteredShoes = getShoesWithLaceInName(shoes);
    return [...acc, ...filteredShoes];
  }, []);

  const splittedNamed = splitShoeName(shoesWithLaceInName);
  return splittedNamed;
}

const currentInventory = [
  {
    name: 'Brunello Cucinelli',
    shoes: [
      { name: 'tasselled black low-top lace-up', price: 1000 },
      { name: 'tasselled green low-top lace-up', price: 1100 },
      { name: 'plain beige suede moccasin', price: 950 },
      { name: 'plain olive suede moccasin', price: 1050 },
    ],
  },
  {
    name: 'Gucci',
    shoes: [
      { name: 'red leather laced sneakers', price: 800 },
      { name: 'black leather laced sneakers', price: 900 },
    ],
  },
];

function assertEqual(actual, expected, testName) {
  const act = JSON.stringify(actual);
  const exp = JSON.stringify(expected);

  if (act === exp) {
    console.log('passed');
  } else {
    console.log(`FAILED [${testName}], expected "${expected}", but got "${actual}"`);
  }
}

const actualResult = generateLaceDetails(currentInventory);

const expectedResult = [
  {
    nameWords: [
      'tasselled',
      'black',
      'low-top',
      'lace-up',
    ],
    targetWordIndex: 3,
  },
  {
    nameWords: [
      'tasselled',
      'green',
      'low-top',
      'lace-up',
    ],
    targetWordIndex: 3,
  },
  {
    nameWords: [
      'red',
      'leather',
      'laced',
      'sneakers',
    ],
    targetWordIndex: 2,
  },
  {
    nameWords: [
      'black',
      'leather',
      'laced',
      'sneakers',
    ],
    targetWordIndex: 2,
  },
];

assertEqual(actualResult, expectedResult, 'render object with lace details');
