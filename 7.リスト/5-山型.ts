// クラスの文化祭で行う劇で背景を制作することになり、現在は山を作っている。
// 各地点での山の高さの一覧 height が与えられるので、山型になっているかどうか判断する isMountain という関数を定義。
// 山型の条件は以下の通り。

// 配列のサイズが 3 以上であること
// 高さは初めは上がり続け、一度下がったら下がり続けること（例：1,2,3,4,5,3,2,1）

function isMountain(height: number[]): boolean {
  let upIndex = 0;
  const n = height.length;

  // 山の上り坂部分を探す
  while (upIndex + 1 < n && height[upIndex] < height[upIndex + 1]) {
    upIndex++;
  }

  // 山が存在しない場合や山の上り坂部分が先頭または末尾にない場合は false を返す
  if (upIndex === 0 || upIndex === n - 1) {
    return false;
  }

  // 山の下り坂部分を探す
  while (upIndex + 1 < n && height[upIndex] > height[upIndex + 1]) {
    upIndex++;
  }

  // 下り坂が最後まで続かない場合は false を返す
  return upIndex === n - 1;
}