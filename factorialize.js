function factorialize(num) {
  if (num === 0) {
    return 1;
  } else {
    let allNums = [];
    for (let i = 1; i <= num; i++) {
      allNums.push(i);
    };
    function getProduct(product, n) {
      return product * n;
    };
    return allNums.reduce(getProduct);
  }
}

console.log(factorialize(5)); // should return 120
console.log(factorialize(0)); // should return 1
console.log(factorialize(10)); // should return 3628800