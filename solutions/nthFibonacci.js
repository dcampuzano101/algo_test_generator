const nthFibonacci = (n) => {
  // fibs = [0, 1, 1, 2, 3, 5]

  // fibonacci - the fib sequence states that n = to the sum of the last two numbers in the fib sequence

  // to solve recursively, we must first determine our base case, n === 1 ? 0, n === 2 ? 1
  // finally we declare our deductive step, we recursively call nthFib(n - 1) and add it to nthFib(n-2)

  if (n === 1) return 0;
  if (n === 2) return 1;

  return nthFibonacci(n - 1) + nthFibonacci(n - 2);
};
