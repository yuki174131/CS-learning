class Node{
    constructor(data){
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

class Deque{
    constructor(){
        this.head = null;
        this.tail = null;
    }

    peekFront(){
        if(this.head == null) return null;
        return this.head.data;
    }

    peekBack(){
        if(this.tail == null) return null;
        return this.tail.data;
    }

    enqueueFront(data){
        if(this.head == null){
            this.head = new Node(data);
            this.tail = this.head;
        }

        let node = new Node(data);
        this.head.prev = node;
        node.next = this.head;
        this.head = node;
    }

    enqueueBack(data){
        if(this.head == null){
            this.head = new Node(data);
            this.tail = this.head;
        }
        else{
            let node = new Node(data);
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        }
    }

    dequeueFront(){
        if(this.head == null) return null;

        let temp = this.head;
        this.head = this.head.next;
        if(this.head != null) this.head.prev = null;
        else this.tail = null;
        return temp.data;
    }

    dequeueBack(){
        if(this.tail == null) return null;

        let temp = this.tail;
        this.tail = this.tail.prev;

        //update the tail
        if(this.tail != null) this.tail.next = null;
        else this.head = null;
        return temp.data;
    }
}

function getMaxWindows(arr, k){
    if(k > arr.length) return [];

    let results = [];
    let deque = new Deque();

    // dequeの初期化
    for(let i = 0; i < k; i++){
        // 新しい値と既存の値を比較して、新しい値以下は全て削除するので、dequeの末尾は新しい値より大きい値になります。
        // dequeの先頭は最大値です。(新しい値より大きいので削除されないから。)
        while(deque.peekBack() !== null && arr[deque.peekBack()] <= arr[i]){
            deque.dequeueBack();
        }
        deque.enqueueBack(i);
    }

    for(let i = k; i < arr.length; i++){
        // dequeの先頭は最大値
        results.push(arr[deque.peekFront()]);

        // ウィンドウ外にある要素は取り除きます。
        while(deque.peekFront() !== null && deque.peekFront() <= i-k) deque.dequeueFront();

        // 現在の値とそれより小さい全てのdequeの値をチェック
        while(deque.peekBack() !== null && arr[deque.peekBack()] <= arr[i]) deque.dequeueBack();
        deque.enqueueBack(i);
        // deque.printList();
    }

    // 最後のmax
    results.push(arr[deque.peekFront()]);

    return results;
}

console.log(getMaxWindows([34,35,64,34,10,2,14,5,353,23,35,63,23], 4)); //[64, 64, 64, 34, 14, 353, 353, 353, 353, 63]