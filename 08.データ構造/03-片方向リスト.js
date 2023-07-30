class Node{
    constructor(data){
        this.next = null;
        this.data = data;
    }

    addNextNode(newNode){
        let tempNode = this.next;
        this.next = newNode;
        newNode.next = tempNode;
    }
}

class SinglyLinkedList{
    constructor(arr){
        this.head = arr.length > 0 ? new Node(arr[0]) : new Node(null);

        let currentNode = this.head;
        for(let i = 1; i < arr.length; i++){
            currentNode.next = new Node(arr[i])
            currentNode = currentNode.next
        }
    }

    at(index){
        let iterator = this.head;
        for(let i = 0; i < index; i++){
            iterator = iterator.next
            if(iterator == null) return null;
        }

        return iterator
    }

    preappend(newNode){
        newNode.next = this.head;
        this.head = newNode;
    }

    popFront(self){
        this.head = this.head.next;
    }

    delete(index){
        if(index == 0) return self.popFront();

        let iterator = this.head;
        for(let i = 0; i < index-1; i++){
            if(iterator.next == null) return null;
            iterator = iterator.next
        }
        iterator.next = iterator.next.next
    }

    reverse() {
        // 'prev'は反転したリストの最後のノード（一つ前のノード）を参照します。最初はnullです。
        let prev = null;
        // 'current'は現在処理中のノードを参照します。最初はリストの先頭を指します。
        let current = this.head;

        while (current !== null) {
            // 'nextNode'は元のリストで次に処理するノードを保存します。
            let nextNode = current.next;
            // 'current'ノードの次のノードを'prev'に更新します。これによりリンクが反転します。
            current.next = prev;
            // 'prev'と'current'を次のステップに進めます。
            prev = current;
            current = nextNode;
        }

        // 'prev'は反転したリストの新しい先頭（元のリストの最後）を指すので、リストの先頭を'prev'に更新します。
        this.head = prev;
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

let numList = new SinglyLinkedList([35,23,546,67,86,234,56,767,34,1,98,78,555]);

numList.printList();
numList.reverse();
numList.printList();