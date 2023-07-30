// 入力された文字列の長さが偶数の場合、文字列の真ん中から文字数の半分に相当する部分文字列を返します。
// 例えば、入力が "ABCDEFGH" の場合、真ん中の部分文字列は "CDEF" です。
// 入力された文字列の長さが奇数の場合、真ん中の文字を除いた、文字数の半分に相当する部分文字列を返します。
// 例えば、入力が "ABCDEFG" の場合、真ん中の部分文字列は "CDE" です。
function middleSubstring(stringInput: string): string {
  const length: number = stringInput.length;
  if (length <= 2) {
    return stringInput[0];
  } else {
    const middleLength: number = Math.floor(length / 2);
    const front: number = Math.floor((length - middleLength) / 2);
    
    // substringは、開始・終了位置の間、または文字列の最後までの部分集合を返します。
    return stringInput.substring(front, front + middleLength);
  }
}


