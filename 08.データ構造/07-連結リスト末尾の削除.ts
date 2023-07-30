class SinglyLinkedListNode<E> {
    public data: E;
    public next: SinglyLinkedListNode<E> | undefined;

    constructor(data: E) {
        this.data = data;
        this.next = undefined;
    }
}
  
function deleteTail<E>(head: SinglyLinkedListNode<E> | null): SinglyLinkedListNode<E> | null {
    if (head === null || head.next === null) {
        return null;
    }

    let currentNode = head;
    while (currentNode.next?.next !== undefined) {
        currentNode = currentNode.next;
    }
    currentNode.next = undefined;

    return head;
}
