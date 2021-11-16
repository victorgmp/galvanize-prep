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

// Create helper functions if needed
const renderStringOfShoes = (designerName, shoes) => {
  let shoesList = '';
  for (let i = 0; i < shoes.length; i++) {
    const { name, price } = shoes[i];
    shoesList += `${designerName}, ${name}, ${price}\n`;
  }

  return shoesList;
};

function renderInventory(inventory) {
  let flatList = '';
  for (let i = 0; i < inventory.length; i++) {
    const { name, shoes } = inventory[i];
    flatList += renderStringOfShoes(name, shoes);
    // console.log('flatList', flatList);
  }

  return flatList;
}

// // Create helper functions if needed
// const renderShoesList = (designerName, shoes) => shoes.reduce((s, item) => {
//   const { name: itemName, price } = item;
//   const shoeDescription = `${designerName}, ${itemName}, ${price}`;
//   if (shoeDescription) {
//     return `${s}\n${shoeDescription}`;
//   }

//   return `${s}\n`;
// }, '');

// function renderInventory(inventory) {
//   return inventory.reduce((str, value) => {
//     const { name, shoes } = value;

//     const shoesList = renderShoesList(name, shoes);
//     return `${str} ${shoesList}`;
//   }, '');
// }

console.log('renderInventory', renderInventory(currentInventory));
