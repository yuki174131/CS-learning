// 整数によって構成される配列が与えられるので、最初の最大値の後に最初の最小値、2 番目の最大値の後に 2 番目の最小値、
// といったように値を並べ替えてから返す sortByMaxMin という関数を作成

function sortByMaxMin(arr: number[]): number[] {
  const sortedArr = arr.sort((a, b) => a - b); // 配列を昇順にソート
  const maxMin: number[] = [];
  
  for (let i = 0; i < sortedArr.length / 2; i++) {
    maxMin.push(sortedArr[arr.length - 1 - i]);
    maxMin.push(sortedArr[i]);
  }
  
  if (sortedArr.length % 2 !== 0) {
    maxMin.push(sortedArr[Math.floor(sortedArr.length / 2)]);
  }
  
  return maxMin;
}
  