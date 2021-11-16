// Create helper functions if needed
const getShoesWithBlackInName = (shoes) => shoes.filter((shoe) => shoe.name.includes('black'));

const renderShoesList = (designerName, shoes) => {
  let shoesList = '';
  shoes.forEach((shoe) => {
    const { name: itemName, price } = shoe;
    shoesList += `${designerName}, ${itemName}, ${price}\n`;
  });

  return shoesList;
};

function listAllBlackShoes(inventory) {
  let flatList = '';
  inventory.forEach((item) => {
    const { name, shoes } = item;
    const filteredShoes = getShoesWithBlackInName(shoes);
    const shoesList = renderShoesList(name, filteredShoes);

    flatList += shoesList;
  });

  return flatList;
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
  if (actual === expected) {
    console.log('passed');
  } else {
    console.log(`FAILED [${testName}], expected "${expected}", but got "${actual}"`);
  }
}

const actualFlatList = listAllBlackShoes(currentInventory);

const expectedFlatList = 'Brunello Cucinelli, tasselled black low-top lace-up, 1000\nGucci, black leather laced sneakers, 900\n';

assertEqual(actualFlatList, expectedFlatList, 'render flat list of inventory items');
