const arrayOfProducts = (array) => {
  let products = [];

  for (let i = 0; i < array.length; i++) {
    let runningProduct = 1;
    for (let j = 0; j < array.length; j++) {
      if (j !== i) runningProduct *= array[j];
    }

    products.push(runningProduct);
  }
  return products;
};
