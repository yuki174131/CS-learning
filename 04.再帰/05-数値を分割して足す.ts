function splitAndAdd(digits: number): number {
  let total = 0;

  while (digits > 9) {
    total += digits % 10;
    digits = Math.floor(digits / 10);
  }
  return (total += digits);
}

console.log(splitAndAdd(546125)) // --> 23

function f(a,b) {
  if (b === 0) {
    return a
  } else {
    return f(b, a % b)
  }
}