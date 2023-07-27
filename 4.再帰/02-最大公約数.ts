function gcd(m, n) {
  if (m % n == 0) {
    // ベースケース
    return n;
  } else {
    return gcd(n, m % n);
  }
}

// 44 と 242 の最大公約数を求めます。
console.log(gcd(44, 242));

// 3355 と 2379 の最大公約数を求めます。
console.log(gcd(3355, 2379));
