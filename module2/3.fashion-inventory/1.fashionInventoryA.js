// Create helper functions if needed
const renderShoesList = (designerName, shoes) => shoes.reduce((s, item) => {
  const { name: itemName, price } = item;
  const shoeDescription = `${designerName}, ${itemName}, ${price}`;
  return `${s} ${shoeDescription}`;
}, '\n');

// const renderShoesList = (designerName, shoes) => {
//   let shoesList = '';
//   shoes.forEach((shoe) => {
//     const { name: itemName, price } = shoe;
//     shoesList += `${designerName}, ${itemName}, ${price}\n`;
//   });

//   return shoesList;
// };

function renderInventory(inventory) {
  return inventory.reduce((str, value) => {
    const { name, shoes } = value;

    const shoesList = renderShoesList(name, shoes);
    return `${str} ${shoesList}`;
  }, '');
}

// function renderInventory(inventory) {
//   let flatList = '';
//   inventory.forEach((item) => {
//     const { name, shoes } = item;
//     const shoesList = renderShoesList(name, shoes);
//     flatList += shoesList;
//   });

//   return flatList;
// }

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

const actualFlatList = renderInventory(currentInventory);
console.log(actualFlatList);

const expectedFlatList = 'Brunello Cucinelli, tasselled black low-top lace-up, 1000\nBrunello Cucinelli, tasselled green low-top lace-up, 1100\nBrunello Cucinelli, plain beige suede moccasin, 950\nBrunello Cucinelli, plain olive suede moccasin, 1050\nGucci, red leather laced sneakers, 800\nGucci, black leather laced sneakers, 900\n';
console.log(expectedFlatList);

assertEqual(actualFlatList, expectedFlatList, 'render flat list of inventory items');
