// m × n を計算する関数
function multiply(m, n) {
  // ベースケース（ループを終了させるステートメント）
  // ベースケースを持っていない場合、無限ループになってしまうので注意
  if (n <= 0) {
    return 0;
  }

  return multiply(m, n - 1) + m;
}
// 5 × 4 を再帰的に計算
console.log(multiply(5, 4));

// 1 から n までの総和を計算する関数s
function summation(n) {
  if (n <= 0) {
    return 0;
  }

  return summation(n - 1) + n;
}
// 1 から 5 までの総和を計算
console.log(summation(5));

// 1 から n までの整数の積を計算する関数
function factorial(n) {
  if (n <= 0) {
    return 1;
  }

  return factorial(n - 1) * n;
}
// 1 から 5 までの整数の積を計算
console.log(factorial(5));


