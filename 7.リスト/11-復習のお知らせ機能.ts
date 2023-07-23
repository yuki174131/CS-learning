// Zollar は算数の計算練習ができるサイトを立ち上げた。
// そのサイトは a 問題から z 問題まで 26 個の問題がある。このサイトには復習機能がついており、
// 1 回しか解いていない問題をトップページの一番上に表示するようにした。
// あるユーザーが解いたことのある問題一覧を表す小文字によって構成される文字列 s が与えられるので、
// その中で 1 番最初に出てくる 1 回しか解いたことがない問題をインデックスで返す、
// firstNonRepeating という関数を定義。当てはまる文字がない場合は -1 を返す
// 入力のデータ型： string s
// 出力のデータ型： integer

function firstNonRepeating(s: string): number {
    const problemCountMap: {[key: string]: number} = {};

    for (let i: number = 0; i < s.length; i++) {
        const problem: string = s[i];
        if (problemCountMap[problem] === undefined) {
            problemCountMap[problem] = 1;
        } else {
            problemCountMap[problem] += 1;
        }
    }

    for (let i: number = 0; i < s.length; i++) {
        if (problemCountMap[s[i]] === 1) {
            return i;
        }
    }

    return -1;
}

// firstNonRepeating("aabbcdddeffg") 4
// firstNonRepeating("abcdabcdf") 8