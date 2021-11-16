// Create helper functions if needed
const renderStringOfShoes = (designerName, shoes) => {
  let shoesList = '';
  for (let i = 0; i < shoes.length; i++) {
    const { name, price } = shoes[i];
    shoesList += `${designerName}, ${name}, ${price}\n`;
  }

  return shoesList;
};

const filterShoes = (shoes) => shoes.filter((shoe) => shoe.name.indexOf('black') !== -1);

function listAllBlackShoes(inventory) {
  let flatList = '';
  for (let i = 0; i < inventory.length; i++) {
    const { name, shoes } = inventory[i];
    const filteredShoes = filterShoes(shoes);
    flatList += renderStringOfShoes(name, filteredShoes);
    // console.log('flatList', flatList);
  }

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

console.log(listAllBlackShoes(currentInventory));
