// 異なる整数値で構成される二分探索木（BST）の根ノード root と BST 内に存在する整数 key が与えられるので、根ノードが先行ノードである部分木を返す、predecessor という関数を作成してください。
// もし、そのようなノードが存在しない場合は null を返してください。ノード N の値を x とした時、先行ノードとは木の中に存在する x よりも小さい最大の値を持つノードのことを指します。
// 後続ノードと先行ノードの操作は対称的です。

class BinaryTree<E> {
    data: E
    left: BinaryTree<E> | null
    right: BinaryTree<E> | null

    constructor(data: E, left: BinaryTree<E> | null = null, right: BinaryTree<E> | null = null) {
        this.data = data
        this.left = left
        this.right = right
    }
}

function predecessor(root: BinaryTree<number> | null, key: number): BinaryTree<number> | null {
    if (!root) {
        return null
    }

    let iterator: BinaryTree<number> | null = root
    let result: BinaryTree<number> | null = null

    while (iterator !== null) {
        if (iterator.data === key) {
            break
        } else if (iterator.data > key) {
            if (iterator.left === null) {
                break
            }
            iterator = iterator.left
        } else {
            result = iterator
            if (iterator.right === null) {
                break
            }
            iterator = iterator.right
        }
    }

    if (iterator) {
        if (iterator.left) {
            iterator = iterator.left
            while (iterator.right !== null) {
                iterator = iterator.right
            }
            return iterator
        }

        iterator = root
        while (iterator !== null) {
            if (iterator.data === key) {
                return result
            }

            if (key > iterator.data) {
                result = iterator
                iterator = iterator.right
            } else {
                iterator = iterator.left
            }
        }
        return result
    }
    return null
}
