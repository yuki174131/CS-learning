// Garrett は R 商事の株を売買する事で儲けようと考えています。
// R 商事の毎日の予想株価リスト stocks が与えられたとき、各日にちの株価がより高くなるまで何日待つかを示したリストを返す、dailyStockPrice という関数を作成してください。
// 株価がより高くなる日がない場合は 0 を入力してください。

class StackNode {
    data: number | null
    next : StackNode | null

    constructor (data: number) {
        this.data = data
        this.next = null
    }
}

class Stack {
    head : StackNode | null
    constructor() {
        this.head = null
    }

    push(data: number) {
        const temp = this.head
        this.head = new StackNode(data)
        this.head.next = temp
    }

    pop(): number | null {
        if (this.head === null) {
            return null
        }
        const temp = this.head
        this.head = this.head.next
        return temp.data
    }

    peek(): number | null {
        if (this.head === null) {
            return null
        }
        return this.head.data
    }
}

function dailyStockPrice(stocks: number[]): number[] {
    const stack = new Stack();
    const result: number[] = [];
    for (let i = stocks.length - 1; i >= 0; i--) {
        stack.push(stocks[i])
    }
    while (stack.head !== null) {
        let node = stack.head
        const nodeData = node.data
        let count: number | null = null
        while (node !== null) {
            count = count !== null ? count + 1 : 1
            if (node.next === null || nodeData < node.next.data) {
                break;
            }
            node = node.next
        }
        stack.pop()
        if (count !== null) {
            result.push(count)
        }
    }


    return result
}


