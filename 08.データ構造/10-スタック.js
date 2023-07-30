class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class Stack{
    constructor(){
        this.head = null;
    }

    push(data){
        let temp = this.head;
        this.head = new Node(data);
        this.head.next = temp;
    }

    pop(){
        if(this.head == null) return null;
        let temp = this.head;
        this.head = this.head.next;
        return temp.data;
    }

    peek(){
        if(this.head === null) return null;
        return this.head.data;
    }
}

// リストを受け取り、単調減少している部分リストを返す関数を実装します。
// リストの途中で単調増加する部分が出現したら、部分リストをリセットします。
function consecutiveWalk(arr){
    let stack = new Stack();
    stack.push(arr[0]);
    for(let i = 1; i < arr.length; i++){
        // スタックの上にある要素より、arr[i]が大きい場合、スタックをリセットします。
        if(stack.peek() < arr[i]){
            // スタックがnullになるまで繰り返されます。
            while(stack.pop() != null);
        }
        // スタックにプッシュします。スタックは常に単調減少になっています。
        stack.push(arr[i]);
    }
    let results = [];
    // resultsは逆向きになっています。
    // unshiftは、preappendのようなもので、配列の先頭に追加します。
    while(stack.peek() != null) results.unshift(stack.pop());
    return results;
}

// console.log(consecutiveWalk([3,4,20,45,56,6,4,3,5,3,2])); // [5,3,2]
// console.log(consecutiveWalk([4,5,4,2,4,3646,34,64,3,0,-34,-54])); // [64,3,0,-34,-54]
console.log(consecutiveWalk([4,5,4,2,4,3646,34,64,3,0,-34,-54,4])); // [4]