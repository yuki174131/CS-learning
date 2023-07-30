// Walker は出版社で文章チェックの仕事をしています。() や {}、[] で括られている文章をチェックしているのですが、
// 正しく使われているか見なければいけません。文字列 parentheses が与えられるので、それが有効かどうか判定する、isParenthesesValid 
// という関数を定義してください。与えられる文字列が有効の条件は以下の通りです。

// 左カッコが同じ種類の右カッコで閉じられてる
// 左カッコが右カッコによって正しい順で閉じられている

class StackNode {
    data: string | null
    next : StackNode | null

    constructor (data: string) {
        this.data = data
        this.next = null
    }
}

class Stack {
    head : StackNode | null
    constructor() {
        this.head = null
    }

    push(data) {
        const temp = this.head
        this.head = new StackNode(data)
        this.head.next = temp
    }

    pop(): string | null {
        if (this.head === null) {
            return null
        }
        const temp = this.head
        this.head = this.head.next
        return temp.data
    }

    peek(): string | null {
        if (this.head === null) {
            return null
        }
        return this.head.data
    }
}

function isParenthesesValid(parentheses:string): boolean{
    const hashmap = {
        ')': '(',
        '}': '{',
        ']': '['
    }

    const stack = new Stack()
    for (let i = 0; i < parentheses.length; i++) {
        if (stack.peek() === null || stack.peek() !== hashmap[parentheses[i]]) {
           stack.push(parentheses[i])
        } else {
           stack.pop()
        }
    }
    
    return stack.peek() === null
}

// 入力のデータ型： string parentheses
// 出力のデータ型： bool
// isParenthesesValid("[{(]") false
// isParenthesesValid("(){}[]") true
// isParenthesesValid("{(([])[])[]}[]") true
// isParenthesesValid("{(([])[])[]]}") false
// isParenthesesValid("{{[[(())]]}}") true
