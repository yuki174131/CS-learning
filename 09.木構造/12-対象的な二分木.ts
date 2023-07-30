class BinaryTree<E> {
    data: E
    left: BinaryTree<E> | null
    right: BinaryTree<E> | null

    constructor(data: E, left?: BinaryTree<E> | null, right?: BinaryTree<E> | null) {
        this.data = data
        this.left = left || null
        this.right = right || null
    }
}

function symmetricTree(root:BinaryTree<number>): boolean{
    return symmetricTreeHelper([root])
}

function symmetricTreeHelper(queue: Array<BinaryTree<number> | null>): boolean {
    let child: Array<BinaryTree<number> | null> = []

    for (let node of queue) {
        if (node === null) {
            break
        }
        child.push(node.left)
        child.push(node.right)
    }

    const maxIndex = queue.length - 1
    for (let i = 0; i <= Math.floor(queue.length / 2); i++) {
        if (queue[i] !== null) {
            if (queue[maxIndex - i] === null || queue[maxIndex - i]?.data !== queue[i]?.data) { // nullish coalescing演算子を使用
                return false
            }
        }
    }

    if (child.length !== 0) {
        return symmetricTreeHelper(child)
    }
    return true
}
