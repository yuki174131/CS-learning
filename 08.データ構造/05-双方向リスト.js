class Node{
    constructor(data){
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}

class DoublyLinkedList{
    constructor(arr){
        if(arr.length <= 0){
            this.head =  new Node(null);
            this.tail = this.head;
            return;
        }

        this.head = new Node(arr[0]);
        let currentNode = this.head;
        for(let i = 1; i < arr.length; i++){
            currentNode.next = new Node(arr[i]);
            currentNode.next.prev = currentNode;
            currentNode = currentNode.next;
        }

        this.tail = currentNode;
    }

    at(index){
        let iterator = this.head;
        for(let i = 0; i < index; i++){
            iterator = iterator.next;
            if(iterator == null) return null;
        }

        return iterator;
    }

    // リストの先頭から要素をpopします。実行時間はO(1)です。
    popFront() {
        this.head = this.head.next;  // 先頭ノードを次のノードに更新します。
        this.head.prev = null;  // 新しい先頭ノードのprev（前のノード）をnullに設定します。
    }

    // リストの末尾から要素をpopします。実行時間はO(1)です。
    pop() {
        this.tail = this.tail.prev;  // 末尾ノードを前のノードに更新します。
        this.tail.next = null;  // 新しい末尾ノードのnext（次のノード）をnullに設定します。
    }

    // 与えられたノードをO(1)で削除します。
    deleteNode(node) {
        // 削除したいノードが末尾ノードの場合、pop()メソッドを呼び出して削除します。
        if (node === this.tail) return this.pop();
        // 削除したいノードが先頭ノードの場合、popFront()メソッドを呼び出して削除します。
        if (node === this.head) return this.popFront();

        // どちらでもない場合（つまり、削除したいノードがリストの中間にある場合）は、
        // 削除したいノードの前のノードと次のノードを直接つなぎます。
        node.prev.next = node.next;
        node.next.prev = node.prev;
    }

    preappend(newNode){
        this.head.prev = newNode;
        newNode.next = this.head;
        newNode.prev = null;
        this.head = newNode;
    }

    append(newNode){
        this.tail.next = newNode;
        newNode.next = null;
        newNode.prev = this.tail;
        this.tail = newNode;
    }

    addNextNode(node, newNode){
        let tempNode = node.next;
        node.next = newNode;
        newNode.next = tempNode;
        newNode.prev = node;

        if(node === this.tail) this.tail = newNode;
        else tempNode.prev = newNode;
    }

    reverse(){
        let reverse = this.tail;
        let iterator = this.tail.prev;

        let currentNode = reverse;
        while(iterator != null){
            currentNode.next = iterator;

            iterator = iterator.prev;
            if(iterator != null) iterator.next = null;

            currentNode.next.prev = currentNode;
            currentNode = currentNode.next;
        }

        this.tail = currentNode;
        this.head = reverse;
        this.head.prev = null;
    }

    printInReverse(){
        let iterator = this.tail;
        let str = "";
        while(iterator != null){
            str += iterator.data + " ";
            iterator = iterator.prev;
        }
        console.log(str)
    }

    printList(){
        let iterator = this.head;
        let str = "";
        while(iterator != null){
            str += iterator.data + " ";
            iterator = iterator.next;
        }
        console.log(str)
    }
}

let numList = new DoublyLinkedList([35,23,546,67,86,234,56,767,34,1,98,78,555]);

// pop
numList.printList();

numList.popFront();
numList.pop();

numList.printList();
numList.printInReverse();

// 要素を削除します
console.log("Deleting in O(1)");
numList.printList();

numList.deleteNode(numList.at(3));
numList.deleteNode(numList.at(9));
numList.deleteNode(numList.at(0));

numList.printList();
numList.printInReverse();