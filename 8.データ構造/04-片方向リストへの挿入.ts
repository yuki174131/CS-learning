class SinglyLinkedListNode<E> {
    public data: E;
    public next: SinglyLinkedListNode<E> | undefined;

    constructor(data: E) {
        this.data = data;
        this.next = undefined;
    }
}
  
  function insertAtPosition<E>(head: SinglyLinkedListNode<E> | undefined, position: number, data: E): SinglyLinkedListNode<E> | undefined {
    if (position === 0) {
        const newNode = new SinglyLinkedListNode(data);
        newNode.next = head;
        return newNode;
    }

    if (!head) {
        return undefined;
    }

    let currentNode = head;
    for (let i = 0; i < position - 1; i++) {
        if (!currentNode.next) {
        break;
        }
        currentNode = currentNode.next;
    }

    const newNode = new SinglyLinkedListNode(data);
    newNode.next = currentNode.next;
    currentNode.next = newNode;

    return head;
}
  