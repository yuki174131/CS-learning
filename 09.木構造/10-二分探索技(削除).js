// BST からノードを削除する際にも、BST の特性を維持する必要がある
// つまり、削除操作後も二分探索木の性質が崩れないようにする必要がある。

// BST からノードを削除するのは、単にノードを BST に挿入するよりもはるかに厄介である。
// その理由は、削除するノードの位置にどのノードを置くのか決めなければならないからである。

// BST からノードを削除するアルゴリズム

// Case 0:
// 木が空の場合、または削除対象のノードが存在しない場合、既存の木をそのまま返す。

// Case 1:
// 削除したいノード（N）が葉ノードの場合、そのノードを単純に削除する。

// Case 2:
// 削除したいノード（N）が左側に子ノードを持たない場合、そのノードの右側の部分木を親ノード（P）の部分木に置き換える。

// Case 3:
// 削除したいノード（N）が右側に子ノードを持たない場合、そのノードの左側の部分木を親ノード（P）の部分木に置き換える。

// Case 4:
// 削除したいノード（N）が左右に子ノードを持つ場合、少し複雑な処理が必要になる。
// この場合、削除したいノードの後続ノード（該当ノードの値よりも大きく、それらの中で最も小さい値を持つノード）を見つけます。後続ノード（S）は、削除したいノードの右側の部分木に必ず存在する。

// (I) 後続ノードの親ノードを SP とする。SP が削除したいノード（N）と同じ場合、つまり後続ノード（S）が削除したいノード（N）の直接の子である場合、後続ノード（S）をその親ノード（SP）に置き換える。
// 後続ノード（S）であり、削除したいノード（N）より大きい最小値であるため、定義通り左部分木は常に null になる。

// (II) しかし、SP が削除したいノード（N）と異なる場合、つまり後続ノード（S）が削除したいノード（N）の右部分木の深部にある場合、次の処理を行う。

// SP から後続ノード（S）を取り除き、その位置に後続ノード（S）の右部分木を移植します。その結果、後続ノード（S）は孤立し、後続ノード（S）の右部分木は元々の位置に残る。
// 削除したいノード（N）の位置に後続ノード（S）を移植します。その結果、後続ノード（S）が削除したいノードの親ノード（P）の新しい子ノードになる。
// 最後に、削除したいノード（N）の左部分木を後続ノード（S）の左部分木に設定します。これにより、削除したいノード（N）の左部分木が保持され、後続ノード（S）が削除したいノード（N）の全ての子を引き継ぐ。
// これらの操作により、二分探索木のプロパティが維持される。


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
        if(tRoot != null){
            this.inOrderWalk(tRoot.left);
            process.stdout.write(tRoot.data + " ");
            this.inOrderWalk(tRoot.right);
        }    
    }
}

class BinarySearchTree{
    constructor(arrList){
        let sortedList = arrList.sort(function(a,b){return a-b;});
        this.root = BinarySearchTree.sortedArrayToBST(sortedList);
    }

    static sortedArrayToBST(array){
        if(array.length == 0) return null;
        return BinarySearchTree.sortedArrayToBSTHelper(array,0,array.length-1);
    }

    static sortedArrayToBSTHelper(array,start,end){
        if(start == end) return new BinaryTree(array[start],null,null);
        
        let mid = Math.floor((start+end)/2);

        let left = null;
        if(mid-1 >= start) left = BinarySearchTree.sortedArrayToBSTHelper(array,start,mid-1);

        let right = null;
        if(mid+1 <= end) right = BinarySearchTree.sortedArrayToBSTHelper(array,mid+1,end);

        let root = new BinaryTree(array[mid],left,right);
        return root;

    }

    keyExist(key){
        let iterator = this.root;
        while(iterator != null){
            if(iterator.data == key) return true;
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
        return iterator;
    }

    insert(value){
        let iterator = this.root;
        while(iterator != null){
            if(iterator.data > value && iterator.left == null) iterator.left = new BinaryTree(value);
            else if(iterator.data < value && iterator.right == null) iterator.right = new BinaryTree(value);
            iterator = (iterator.data > value)? iterator.left: iterator.right;
        }
        return this.root;       
    }

    transplant(nodeParent, node, target){
        if (nodeParent == null) this.root = target;
        else if (nodeParent.left == node) nodeParent.left = target;
        else nodeParent.right = target;
    }    

    deleteNode(key){
        if (this.root == null) return;
        let node = this.search(key);
        if (!this.keyExist(key)) return;

        let parent = this.findParent(node);
        // case 1: ノードNが葉ノード
        // 親ノードからnodeへの参照をnullに変更してnodeを削除します。
        if (node.left == null && node.right == null) {
            if(parent.left.data == key) parent.left = null;
            else if(parent.right.data == key) parent.right = null;
        }

        // case 2: ノードNの左が空
        if (node.left == null) this.transplant(parent, node, node.right);
        // case 3: ノードNの右が空
        else if (node.right == null) this.transplant(parent, node, node.left);
        // case 4: 2つの子を持っている場合
        else{
            let successor = this.findSuccessor(node);
            let successorP = this.findParent(successor);

            // case 4 後続ノードSがすぐ右側にいる場合 : この場合、ノードNが後続ノードSの親になっているため、case4は必要ありません。単純にNの親であるPの部分木とSを移植すればokです。
            // 特別なケース (case 4) 後続ノードSがすぐ右側にいない場合 : この場合、後続Sの親も変更しなければいけません。
            if (successor != node.right){
                // 後続ノードSをSの右部分木で移植します。Sをアップデートします。
                this.transplant(successorP, successor, successor.right);
                // Sの右側はノードNの右側になっている必要があります。
                successor.right = node.right;

            }
            // ノードNを後続Sで移植します。Sの左部分木をノードNの左部分木にします。
            this.transplant(parent, node, successor);
            successor.left = node.left;
        }
    }          

    findParent(node){
        let iterator = this.root;
        let parent;
        while (iterator != node){
            parent = iterator;
            iterator = iterator.data > node.data ? iterator.left: iterator.right;
        }    
        return parent;
    }
    
    findSuccessor(node){

        // 部分木
        let targetNode = node;
        // keyがBST内に存在しない場合、nullを返します。
        if (targetNode == null) return null;
        // keyのノードの右にある最小値を探します。
        if (targetNode.right != null) return this.minimumNode(targetNode.right);

        let successor = null;
        let iterator = this.root;

        while (iterator != null) {
            if (targetNode.data == iterator.data) return successor;
            // successorを左方向へずらしていきます。
            if (targetNode.data < iterator.data && (successor == null || iterator.data < successor.data)) successor = iterator;
            if (targetNode.data < iterator.data) iterator = iterator.left;
            else iterator = iterator.right;
        }    
        return successor;
    }

    minimumNode(node){
        let iterator = node;
        while (iterator != null && iterator.left != null) iterator = iterator.left;
        return iterator;
    }
    
    printSorted(){
        this.root.printInOrder();
    }
}

let balancedBST = new BinarySearchTree([4,43,36,46,32,7,97,95,34,8,96,35,85,1010,232]);

balancedBST.printSorted();
balancedBST.deleteNode(43);
balancedBST.printSorted();
balancedBST.deleteNode(7);
balancedBST.printSorted();
balancedBST.deleteNode(4);
balancedBST.printSorted();
balancedBST.deleteNode(1010);
balancedBST.printSorted();
// 存在しない0をdeleteNodeします。
balancedBST.deleteNode(0);
balancedBST.printSorted();