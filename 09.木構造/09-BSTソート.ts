class BinaryTree<E> {
    data: E;
    left: BinaryTree<E> | null;
    right: BinaryTree<E> | null;

    constructor(data: E, left?: BinaryTree<E> | null, right?: BinaryTree<E> | null) {
        this.data = data;
        this.left = left || null;
        this.right = right || null;
    }
}

function allElementsSorted(root1: BinaryTree<number>, root2: BinaryTree<number>): number[] {
    const list1 = sortedList(root1, []);
    const list2 = sortedList(root2, []);

    let result: number[] = [];
    while (list1.length > 0 || list2.length > 0) {
        if (list1.length === 0 || (list2.length > 0 && list1[0] > list2[0])) {
            const element = list2.shift();
                if (element !== undefined) {
                    result.push(element);
                }
        } else {
            const element = list2.shift();
                if (element !== undefined) {
                    result.push(element);
                }
        }
    }
    return result;
}

function sortedList(node: BinaryTree<number> | null, list: number[]): number[] {
    if (node === null) return list;

    sortedList(node.left, list);
    list.push(node.value);
    sortedList(node.right, list);

    return list;
}
