// Pair of Cards というゲームをプレイしています。このゲームは以下のルールになっている。

// 同じランク（※カードの強さ）のカードの枚数が多いプレイヤーが勝利する（2 が 3 枚 > 10 が 2 枚）
// 上記枚数が同じ場合は、そのカードのランクによって勝敗が決まる（2 が 2 枚 < 10 が 2 枚）
// 上記も同じ場合は、次に枚数の多いカードを同様に比べ、勝敗が決まるまですべてのカードを比べる
// 最終的に勝敗が決まらない場合は draw とする
// カードの強さ : 2 < 3 < 4 < 5 < 6 … J < Q < K < A
// プレイヤー1、2 の手札を表す配列 player1、player2 が与えられるので、勝利プレイヤー文字列で返す、winnerPairOfCards という関数を作成する。
// 例1 : プレイヤー1 が ["♣4","♥8","♥8","♠8","♣J"] で、プレイヤー2 が ["♣4","♥J","♥J","♠Q","♣3"] の場合、プレイヤー1 は 8 を 3 枚持ち、プレイヤー2 は J を 2 枚持っているので、プレイヤー1 が勝利する。
// 例2 : プレイヤー1 が ["♣4","♥8","♥8","♠4","♣J"] で、プレイヤー2 が ["♣4","♥J","♥J","♠Q","♣3"] の場合、プレイヤー1 は 4 を 2 枚、8 を 2 枚持ち、プレイヤー2 は J を 2 枚持つので、両者のランクの数は同じ。一方、両者のカードを比較してみると、プレイヤー2 のカード（J）の方がプレイヤー1（8）よりも強いので、プレイヤー2 の勝利となる。
// 例3 : プレイヤー1 が ["♣4","♥7","♥7","♠Q","♣J"] で、プレイヤー2 が ["♥7","♥7","♣K","♠Q","♦2"] の場合、プレイヤー1 は 7 を 2 枚持ち、プレイヤー2 も 7 を 2 枚持つので、両者のランクの数もカードの強さも同じです。次に 1 枚のカードを見ると、プレイヤー2 のカード K の方がプレイヤー1 のカード Qよりも強いので、プレイヤー2 の勝利となる。

// 入力のデータ型： string[] player1, string[] player2
// 出力のデータ型： string

function winnerPairOfCards(player1:string[], player2:string[]): string{
    
    const cardStrength = {2:1, 3:2, 4:3, 5:4, 6:5, 7:6, 8:7, 9:8, 10:9, J:10, Q:11, K:12, A:13};

    const hashmap1 = createHashmap(player1)
    const hashmap2 = createHashmap(player2)

    return result(hashmap1, hashmap2)

    type Hashmap = { [key: string]: number };
    function createHashmap(player: string[]): Hashmap {
        const hashmap = {}
        for (let i = 0; i < player.length; i++) {
            const value = player[i].slice(1)
            if (hashmap[value] === undefined) {
                hashmap[value] = 1
            } else {
                hashmap[value] += 1
            }
        }

        return hashmap
    }

    function getMaxKeyAndValue(hashmap: Hashmap): [string, number] {
        let maxKey = "";
        let maxValue = -Infinity;
        for (const key in hashmap) {
            if (hashmap[key] > maxValue ||
                hashmap[key] === maxValue && cardStrength[key] > cardStrength[maxKey]) {
                maxValue = hashmap[key];
                maxKey = key;
            }
        }
        return [maxKey, maxValue]
    }

    function result (hashmap1: Hashmap, hashmap2: Hashmap): string {
        const [maxKey1, maxValue1] = getMaxKeyAndValue(hashmap1)
        const [maxKey2, maxValue2] = getMaxKeyAndValue(hashmap2)

        if (maxValue1 !== maxValue2) {
            return maxValue1 > maxValue2 ? 'player1' : 'player2'
        } else if (cardStrength[maxKey1] !== cardStrength[maxKey2]) {
            return cardStrength[maxKey1] > cardStrength[maxKey2] ? 'player1' : 'player2' 
        } else {
            delete hashmap1[maxKey1]
            delete hashmap2[maxKey2]

            if (Object.keys(hashmap1).length === 0 && Object.keys(hashmap2).length === 0) {
                return 'draw'
            } else {
                return result(hashmap1, hashmap2)
            }
        }
    }
}

// winnerPairOfCards(["♣4","♥7","♥7","♠Q","♣J"],["♥10","♥6","♣K","♠Q","♦2"]) player1
// winnerPairOfCards(["♣4","♥7","♥7","♠Q","♣J"],["♥7","♥7","♣K","♠Q","♦2"]) player2
// winnerPairOfCards(["♣A","♥2","♥3","♠4","♣5"],["♥A","♥2","♣3","♠4","♦5"]) draw
// winnerPairOfCards(["♣A","♥A","♥A","♠4","♣5"],["♥A","♥A","♣A","♠4","♦5"]) draw
// winnerPairOfCards(["♣9","♥8","♥7","♠4","♣5"],["♥10","♥8","♣7","♠4","♦5"]) player2
