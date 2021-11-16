// Create helper functions if needed
const getAveragePrice = (shoes) => shoes.reduce((s, item) => s + item.price / shoes.length, 0);

function calculateAveragePricePerDesigner(inventory) {
  const averagePricePerDesigner = inventory.reduce((str, value) => {
    const { name, shoes } = value;

    const averagePrice = getAveragePrice(shoes);
    const designerObj = { name, averagePrice };

    return [...str, designerObj];
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

function assertEqual(actual, expected, testName) {
  const act = JSON.stringify(actual);
  const exp = JSON.stringify(expected);

  if (act === exp) {
    console.log('passed');
  } else {
    console.log(`FAILED [${testName}], expected "${expected}", but got "${actual}"`);
  }
}

const actual = calculateAveragePricePerDesigner(currentInventory);

const expected = {
  designers: [
    {
      name: 'Brunello Cucinelli',
      averagePrice: 1025,
    },
    {
      name: 'Gucci',
      averagePrice: 850,
    },
  ],
};

assertEqual(actual, expected, 'render flat list of inventory items');
