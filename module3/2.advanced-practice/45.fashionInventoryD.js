const getShoesWithLaceInName = (shoes) => shoes.filter((shoe) => shoe.name.indexOf('lace') !== -1);

const getTargetWordIndex = (words) => words.reduce((acc, value) => {
  if (value.includes('lace')) {
    return words.indexOf(value);
  }

  return acc;
}, -1);

const transformShoeName = (shoes) => shoes.map((shoe) => {
  const nameWords = shoe.name.split(' ');
  const targetWordIndex = getTargetWordIndex(nameWords);

  return { nameWords, targetWordIndex };
});

function generateLaceDetails(inventory) {
  const shoesWithLaceInName = inventory.reduce((acc, currValue) => {
    const { shoes } = currValue;
    const filteredShoes = getShoesWithLaceInName(shoes);

    return [...acc, ...filteredShoes];
  }, []);

  const transformedNames = transformShoeName(shoesWithLaceInName);
  return transformedNames;
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

console.log(generateLaceDetails(currentInventory));
