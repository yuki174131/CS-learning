// 再帰関数のコールスタック

// 1 から n までの総和を計算する関数
function simpleSummation(n) {
    if (n <= 0) {
      return 0;
    }
  
    return simpleSummation(n - 1) + n;
  }
// 1 から 5 までの総和を計算
console.log(simpleSummation(5));

// 上記では、以下のような計算が行われる。
// simpleSummation(5)
// simpleSummation(4) + 5
// (simpleSummation(3) + 4) + 5
// ((simpleSummation(2) + 3) + 4) + 5
// (((simpleSummation(1) + 2) + 3) + 4) + 5
// (((simpleSummation(0) + 1) + 2) + 3) + 4) + 5
// ((((0 + 1) + 2) + 3) + 4) + 5
// (((1 + 2) + 3) + 4) + 5
// ((3 + 3) + 4) + 5
// (6 + 4) + 5
// 10 + 5
// 15

// 末尾再帰を利用したコード
// 途中結果を保存するため、引数を追加
function simpleSummationTail(n){
  return simpleSummationTailHelper(n, 0);
}

// 補助関数
function simpleSummationTailHelper(count, total){
  // ベースケースに達したら、計算結果を返す。
  if(count <= 0 ) {
      return total;
  }

  // total + count として、計算結果を足していく
  return simpleSummationTailHelper(count-1, total+count);
}
console.log(simpleSummationTail(5));

// 末尾再帰の形を取る補助関数で再帰処理が行われる。第二引数に計算の途中結果が保存される。
// simpleSummationTailHelper(4,5)
// simpleSummationTailHelper(3,9)
// simpleSummationTailHelper(2,12)
// simpleSummationTailHelper(1,14)
// simpleSummationTailHelper(0,15)
// 15

// 末尾再帰を利用することで、一部の言語では末尾呼び出し最適化（tail call optimization）
// という技術が適用されることがある。
// この技術は、スタックの消費を抑えるために、コンパイラが最適化を行う。
// ただし、これは関数型言語やC++、JavaScriptなど特定の言語に限られる。

// 末尾呼び出し最適化が適用されると、スタックの累積がなくなることから、
// 空間計算量が圧倒的に削減できるというメリットがある。
// 末尾呼び出し最適化では、関数は自身を pop し、次の関数を同じフレーム内に push し、
// 全ての計算を完結することができるため、空間計算量は O(1)になる。

// simpleSummation
// 時間計算量: O(n)
// 空間計算量: O(n)

// simpleSummationTail
// 時間計算量: O(n)
// 空間計算量: O(1)

// フィボナッチ関数の例で末尾再帰を検証
// n 番目のフィボナッチ数を返します。
function fibonacciNumber(n){
  // ベースケース
  if(n == 0) {
      return 0;
  } else if(n == 1) {
      return 1;
  }

  return fibonacciNumber(n - 1) + fibonacciNumber(n - 2);
}

console.log(fibonacciNumber(3))  2
console.log(fibonacciNumber(5))  5

// 末尾再帰を使って、n 番目のフィボナッチを返す関数を作成。
function fibonacciNumberTailHelper(fn1, fn2, n){
  if(n < 1) {
      return fn1;
  }

  return fibonacciNumberTailHelper(fn2, fn1+fn2, n-1);
}

function fibonacciNumberTail(n){
  // 補助関数を使用し、初期値 0, 1 を追加。
  return fibonacciNumberTailHelper(0,1,n);
}

console.log(fibonacciNumberTail(3));  2
console.log(fibonacciNumberTail(5));  5

// 尾再帰によって、自身をn 回呼び出すだけで n 項目を求めることができるようになったので、
// 時間計算量が O(2n)から O(n)に大幅に削減。空間計算量は O(n)から O(1)へ削減することができる。

// fibonacciNumber
// 時間計算量: O(2n)
// 空間計算量: O(n)

// fibonacciNumberTail
// 時間計算量: O(n)
// 空間計算量: O(1)