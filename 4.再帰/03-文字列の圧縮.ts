// 文字が連続して 2 回以上続く場合は文字を数字に置き換える。
function stringCompression(s: string): string {
  if (s === "") {
    return "";
  }
  const count = countConsecutiveString(s);
  const format = count < 1 ? "" : count.toString();

  return s[0] + format + stringCompression(s.slice(count));
}

function countConsecutiveString(s: string): number {
  if (s[0] === s[1]) {
    return countConsecutiveString(s.slice(1)) + 1;
  } else {
    return 0;
  }
}
