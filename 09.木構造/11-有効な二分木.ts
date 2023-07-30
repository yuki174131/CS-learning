// 二分木 root が与えられるので、それが二分探索木（BST）かどうか確かめる、validateBST という関数を作成してください。ただし、有効な BST とは以下の条件を指します。

// ノードの左部分木にはノードのキーより小さい値を含みます
// ノードの右部分木にはノードのキーより大きい値を含みます
// 左右の部分木も BST である必要があります

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

function validateBST(root:BinaryTree<number>): boolean{
    if (root === null) {
        return true
    }

    const leftMax = maxNode(root.left)
    if (leftMax !== null && leftMax >= root.data) {
        return false
    }

    return validateBSTHelper(root)
}

function maxNode(node:BinaryTree<number>): number|null {
    if (node === null) {
        return null
    }

    let iterator = node;
    while(iterator != null && iterator.right != null){
        iterator = iterator.right;
    }

    return iterator.data;
}

function validateBSTHelper(root:BinaryTree<number>): boolean{
    if (root === null) {
        return true
    }

    if (root.left && root.data <= root.left.data) {
        return false
    }

    if (root.right && root.data >= root.right.data) {
        return false
    }

    return validateBSTHelper(root.left) && validateBSTHelper(root.right)
}

