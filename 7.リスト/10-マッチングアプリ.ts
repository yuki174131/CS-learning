// ユーザーの属性をアルファベットで記録しており、アルファベットの並ぶパターンが同じユーザーは相性が良いと判定している。
// ユーザー1 の属性 user1、ユーザー2 の属性 user2 が与えられるので、
// この 2 つが同じパターンをしているかどうか判定する、hasSameType という関数を定義。
// 入力のデータ型： string user1, string user2
// 出力のデータ型： bool

function hasSameType(user1: string, user2: string): boolean {
    if (user1.length !== user2.length) {
        return false;
    }

    const countMap1 = {};
    const countMap2 = {};
    for (let i = 0; i < user1.length; i++) {
        const user1str = user1[i];
        const user2str = user2[i];
        countMap1[user1str] = (countMap1[user1str] || 0) + 1;
        countMap2[user2str] = (countMap2[user2str] || 0) + 1;
    }

    for (let i = 0; i < user1.length; i++) {
        const user1str = user1[i];
        const user2str = user2[i];
        if (countMap1[user1str] !== countMap2[user2str]) {
            return false;
        }
    }

    return true;
}

// hasSameType("aabb","yyza") false
// hasSameType("aappl","bbtte") true