class BinaryTree<E>{
    data: E;
    left: BinaryTree<E> | null;
    right: BinaryTree<E> | null;

    constructor(data: E, left?: BinaryTree<E>, right?: BinaryTree<E>){
        this.data = data;
        this.left = left || null;
        this.right = right || null;
    }
}

function maximumDepth(root:BinaryTree<number>): number{
    return maximumDepthHelper(root, 0);
}

function maximumDepthHelper(root, num) {
    if (root == null) {
        return num
    }

    const left = maximumDepthHelper(root.left, num + 1); 
    const right = maximumDepthHelper(root.right, num + 1);  

    return left > right ? left : right
}