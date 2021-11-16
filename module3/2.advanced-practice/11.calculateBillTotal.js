function calculateBillTotal(preTaxAndTipAmount) {
  const calcPercentage = (num, per) => (num / 100) + per;

  const taxAmount = calcPercentage(preTaxAndTipAmount, 9.5);
  const tipAmount = calcPercentage(preTaxAndTipAmount, 15);

  return taxAmount + tipAmount;
}

const output = calculateBillTotal(20);
console.log(output); // --> 24.9
