// n × m の四角形の中に、 2 i × 2 i （ i ≥ 0 ）のタイルを敷き詰めていく。
// 自然数 n、m が与えられ、最も少ないタイルの数を返す、minTiles という関数を再帰を使って作成

function minTiles(n: number, m: number): number {
  if (n === 0 && m === 0) {
      return 0;
  }

  if (n % 2 === 0 && m % 2 === 0) {
      return minTiles(n / 2, m / 2);
  } else if (n % 2 !== 0 && m % 2 === 0) {
      return minTiles((n - 1) / 2, m / 2) + m;
  } else if (n % 2 === 0 && m % 2 !== 0) {
      return minTiles(n / 2, (m - 1) / 2) + n;
  } else {
      return minTiles((n - 1) / 2, (m - 1) / 2) + m + n - 1;
  }
}

console.log(minTiles(4, 3)); // 6
console.log(minTiles(8, 8)); // 8
console.log(minTiles(5, 5)); // 9