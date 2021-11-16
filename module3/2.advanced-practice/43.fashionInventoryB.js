// Create helper functions if needed
const getAveragePrice = (shoes) => shoes.reduce((acc, currValue) => {
  const { price } = currValue;
  return acc + price / shoes.length;
}, 0);

function calculateAveragePricePerDesigner(inventory) {
  const averagePricePerDesigner = inventory.reduce((acc, currValue) => {
    const { name, shoes } = currValue;

    const averagePrice = getAveragePrice(shoes);
    const designerObj = { name, averagePrice };

    return [...acc, designerObj];
  }, []);

  return { designers: averagePricePerDesigner };
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

console.log(calculateAveragePricePerDesigner(currentInventory));
