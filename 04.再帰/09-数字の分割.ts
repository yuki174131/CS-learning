// 与えられた自然数の、数字を 1 桁ずつ分解して、それぞれの値を合計し、
// その値が 1 桁になるまで同じ作業を繰り返した時、それぞれの合計値を足し合わせて得られる値を返す、
// recursiveDigitsAdded という関数を再帰を使って作成。
// 例えば、45622943 の場合、1 桁ずつ分解することによって、4 + 5 + 6 + 2 + 2 + 9 + 4 + 3 = 35 
// となりますが、値が 1 桁ではないので、もう一度 35 = 3 + 5 = 8 のように分解。
// 最後にそれぞれ足し合わせて 8 + 35 = 43 となる

function recursiveDigitsAdded(digits: number): number {
  return recursiveDigitsAddedHelper(digits, 0, 0);
}

function recursiveDigitsAddedHelper(digits: number, total: number, finalTotal: number): number {
  if (digits <= 0) {
      if (total >= 10) {
          return recursiveDigitsAddedHelper(total, 0, finalTotal + total);
      } else {
          return finalTotal + total;
      }
  }
  return recursiveDigitsAddedHelper(Math.floor(digits / 10), total + digits % 10, finalTotal);
}

// recursiveDigitsAdded(5) 5
// recursiveDigitsAdded(98) 25
// recursiveDigitsAdded(3528) 27