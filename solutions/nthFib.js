const getNthFib = (n) => {
  // fibs = [0, 1, 1, 2, 3, 5, 8];
  if (n === 1) return 0;
  if (n === 2) return 1;

  return getNthFib(n - 1) + getNthFib(n - 2);
};

const getNthFibIteratively = (n) => {
  if (n === 1) return 0;
  if (n === 2) return 1;
  let fibs = [0, 1];
  while (fibs.length < n) {
    let lastFib = fibs[fibs.length - 1];
    let secondLastFib = fibs[fibs.length - 2];

    fibs.push(lastFib + secondLastFib);
  }
  return fibs[fibs.length - 1];
};
