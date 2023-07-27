// Beck は倉庫の整理係で、倉庫内にある荷物には全て商品番号が振られています。
// ある日、地震が起きて棚にある荷物が全て落ちてしまい、Beck は急いで棚に戻したら荷物の順番がバラバラとなった。
// 地震前の荷物 arr と地震後の荷物 shuffledArr が与えられるので、地震が起きた後に何%の荷物が移動したかを返す、shuffleSuccessRate という関数を定義する。
// 小数点以下に対しては切り捨ての処理を行い、また商品番号は一意であるとする。

function shuffleSuccessRate(arr: number[], shuffledArr: number[]): number {
    if (arr.length !== shuffledArr.length) {
        return 0;
    }

    let moveCount = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== shuffledArr[i]) {
            moveCount++;
        }
    }

    return Math.floor(moveCount / arr.length * 100);
}