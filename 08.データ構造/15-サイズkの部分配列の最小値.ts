class DequeNode {
    data: number | null;
    next: DequeNode | null;
    prev: DequeNode | null;
    constructor(data: number | null) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

class Deque {
    head: DequeNode | null;
    tail: DequeNode | null;
    constructor() {
        this.head = null;
        this.tail = null;
    }

    peekFront(): number | null {
        if (this.head == null) {
            return null;
        }
        return this.head.data;
    }

    peekBack(): number | null {
        if (this.tail === null) {
            return null;
        }
        return this.tail.data;
    }

    enqueueFront(data: number): void {
        if (this.head === null) {
            this.head = new DequeNode(data);
            this.tail = this.head;
        } else {
            const temp = this.head;
            this.head = new DequeNode(data);
            this.head.next = temp;
            if (temp !== null) {
                temp.prev = this.head;
            }
        }
    }

    enqueueBack(data: number): void {
        if (this.head === null) {
            this.head = new DequeNode(data);
            this.tail = this.head;
        } else if (this.tail !== null)  {
            this.tail.next = new DequeNode(data);
            const temp = this.tail;
            this.tail = this.tail.next;
            this.tail.prev = temp;
        }
        
    }

    dequeueFront(): number | null {
        if (this.head === null) {
            return null;
        }

        const temp = this.head;
        this.head = this.head.next;
        if (this.head !== null) {
            this.head.prev = null;
        } else {
            this.tail = null;
        }
        return temp.data;
    }

    dequeueBack(): number | null {
        if (this.tail === null) {
            return null;
        }
        const temp = this.tail;
        this.tail = this.tail.prev;
        if (this.tail !== null) {
            this.tail.next = null;
        } else {
            this.head = null;
        }
        return temp.data;
    }
}

function minWindowArrK(intArr: number[], k: number): number[] {
    if (k > intArr.length) return [];

    let results: number[] = [];
    let deque = new Deque();

    // dequeの初期化
    for (let i = 0; i < k; i++) {
        while (deque.peekBack() !== null && intArr[deque.peekBack()] >= intArr[i]) {
            deque.dequeueBack();
        }
        deque.enqueueBack(i);
    }

    for (let i = k; i < intArr.length; i++) {
        results.push(intArr[deque.peekFront()]);

        while (deque.peekFront() !== null && deque.peekFront() <= i - k) {
            deque.dequeueFront();
        }

        while (deque.peekBack() !== null && intArr[deque.peekBack()] >= intArr[i]) {
            deque.dequeueBack();
        }
        deque.enqueueBack(i);
    }

    results.push(intArr[deque.peekFront()]);
    return results;
}
