class SinglyLinkedListNode<E> {
  public data: E;
  public next: SinglyLinkedListNode<E> | undefined;

  constructor(data: E) {
    this.data = data;
    this.next = undefined;
  }
}

function findMergeNode(headA: SinglyLinkedListNode<number>, headB: SinglyLinkedListNode<number>): number {
  if (!headA || !headB) {
    return -1;
  }

  let lengthA = getLinkedListLength(headA);
  let lengthB = getLinkedListLength(headB);

  let diff = Math.abs(lengthA - lengthB);

  let longerList = (lengthA >= lengthB) ? headA : headB;
  let shorterList = (lengthA >= lengthB) ? headB : headA;

  // 長い方のリストを先に進める
  for (let i = 0; i < diff; i++) {
    longerList = longerList.next!;
  }

  // 両方のリストを同時に進める
  while (longerList !== undefined && shorterList !== undefined) {
    if (longerList === shorterList) {
      return longerList.data;
    }
    longerList = longerList.next!;
    shorterList = shorterList.next!;
  }

  return -1;
}

function getLinkedListLength(head: SinglyLinkedListNode<number> | undefined): number {
  let length = 0;
  let current = head;
  while (current !== undefined) {
    length++;
    current = current.next;
  }
  return length;
}
