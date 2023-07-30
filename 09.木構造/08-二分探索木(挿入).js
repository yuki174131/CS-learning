// BST「挿入」
// 二分探索木は、左の子ノードが現在のノードより小さく、右の子ノードが現在のノードより大きいというプロパティを持つデータ構造。
// 新しい値を二分探索木に挿入するためには、このプロパティを維持する必要がある。

// 具体的な挿入の手順は以下の通り。

// 関数 Insert(root, v): この関数は二つの引数、つまり既存の BST の根ノード root と挿入したい新しい値 v を受け取る。この関数の目的は、BST の特性を維持しながら、値 v を BST に挿入すること。

// BST の探索: 新しい値 v を適切な位置に挿入するためには、まず BST を探索する必要がある。
// これは BST の性質を利用した探索で、現在見ているノードの値と比較して、v がそのノードの値よりも大きければ右の子ノードに、小さければ左の子ノードに移動する。

// 値の挿入: BST を探索し、葉ノードに到達したら、そのノードは新しい値 v の親ノードとなる。そして、v を親ノードの左または右に挿入する。
// BST が空の場合: 親ノードが存在しない場合、新しい値 v は新しい BST の根ノードとなる。

class BinaryTree{
    constructor(data, left = null, right = null){
        this.data = data;
        this.left = left;
        this.right = right;
    }

    printInOrder(){
        this.inOrderWalk(this);
        console.log("");
    }

    inOrderWalk(tRoot){
        if(tRoot !== null){
            this.inOrderWalk(tRoot.left);
            process.stdout.write(tRoot.data + " ");
            this.inOrderWalk(tRoot.right);
        }
    }
}

class BinarySearchTree{
    constructor(arrList){
        let sortedList = arrList.sort(function(a, b) {return a - b;});
        this.root = BinarySearchTree.sortedArrayToBST(sortedList);
    }

    static sortedArrayToBST(array) {
        if(array.length == 0) return null;
        return BinarySearchTree.sortedArrayToBSTHelper(array, 0, array.length-1);
    }

    static sortedArrayToBSTHelper(arr, start, end) {
        if(start === end) return new BinaryTree(arr[start], null,null);
        
        let mid = Math.floor((start+end)/2);
        
        let left = null;
        if(mid-1 >= start) left = BinarySearchTree.sortedArrayToBSTHelper(arr, start, mid-1);
        
        let right = null;
        if(mid+1 <= end) right = BinarySearchTree.sortedArrayToBSTHelper(arr, mid+1, end);
        
        let root = new BinaryTree(arr[mid], left, right);
        return root;
    }

    keyExist(key){
        let iterator = this.root;
        while(iterator !== null){
            if(iterator.data === key) return true;
            if(iterator.data > key) iterator = iterator.left;
            else iterator = iterator.right;
        }
        
        return false;
    }

    search(key){
        let iterator = this.root;
        while(iterator != null){
            if(iterator.data == key) return iterator;
            if(iterator.data > key) iterator = iterator.left;
            else iterator = iterator.right;
        }
        
        return null;
    }
    
    // insert
    insert(value){
        let iterator = this.root;
        while(iterator != null){
            if(iterator.data > value && iterator.left == null) iterator.left = new BinaryTree(value);
            else if(iterator.data < value && iterator.right == null) iterator.right = new BinaryTree(value);
            iterator = (iterator.data > value)? iterator.left: iterator.right;
        }
        return this.root;       
    }

    printSorted(){
        this.root.printInOrder();
    }
}

let balancedBST = new BinarySearchTree([4,43,36,46,32,7,97,95,34,8,96,35,85,1010,232]);
balancedBST.printSorted();
balancedBST.insert(5);
balancedBST.printSorted();
balancedBST.insert(47);
balancedBST.printSorted();
// 0をinsertします。
balancedBST.insert(0);
balancedBST.printSorted();