// 序数詞を判定する
function getSuffix(num: number): string {
  const suffixes: { [key: number]: string } = {
    1: "st",
    2: "nd",
    3: "rd",
  };
  const lastDigit: number = num % 10;
  return suffixes[lastDigit] || "th";
}

// 西暦を世紀へ変換する。
function getCentury(year: number): string {
  const century: number = Math.ceil(year / 100);
  const suffix: string = getSuffix(century);
  return `${century}${suffix} century`;
}

// JavaScript の Math ライブラリは、三角関数や対数など、一般的な数学的演算を行うための関数のコレクションです。
// Math ライブラリは JavaScript 標準ライブラリの一部です。
// つまり、すべての JavaScript 環境にデフォルトで含まれており、インポートやインストールの必要なく、どの JavaScript プログラムでも使用することができます。
// 試しに JavaScript の Math ライブラリをみてみましょう。
// https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Math