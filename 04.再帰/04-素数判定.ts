function recursiveIsPrime(n: number): boolean {
  if (n < 2) {
    return false;
  }

  return recursiveIsPrimeHelper(n, 2);
}

function recursiveIsPrimeHelper(n: number, count: number): boolean {
  if (n === count) {
    return true;
  }

  if (n % count === 0) {
    return false;
  }

  return recursiveIsPrimeHelper(n, count + 1);
}
