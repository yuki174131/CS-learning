// Heapクラスは二分ヒープを操作するためのクラスです。
class Heap {
    static left(i) {
        // 左の子ノードのインデックスを計算します。0から始まるインデックスを使用します。
        return 2 * i + 1;
    }

    static right(i) {
        // 右の子ノードのインデックスを計算します。0から始まるインデックスを使用します。
        return 2 * i + 2;
    }

    // 最大ヒープを構築します。つまり、あるノードとその子ノードが条件を満たさない場合に、そのノードを再配置します。
    static maxHeapify(arr, i) {
        // この条件は、親ノードがその子ノードよりも大きいか等しいというものです。
        // 左の子ノードのインデックスを取得します。
        const l = Heap.left(i);
        // 右の子ノードのインデックスを取得します。
        const r = Heap.right(i);

        // 最大値のインデックスを保存します。初期値は親ノードのインデックスです。
        let biggest = i;
        // 子ノードが存在し、それが親ノードよりも大きい場合、最大値のインデックスを更新します。
        if (l < arr.length && arr[l] > arr[biggest]) biggest = l;
        if (r < arr.length && arr[r] > arr[biggest]) biggest = r;

        // 親ノードが最大値でなければ、親ノードと最大値を交換し、再度ヒープ構築を行います。
        if (biggest !== i) {
            const temp = arr[i];
            arr[i] = arr[biggest];
            arr[biggest] = temp;
            Heap.maxHeapify(arr, biggest);
        }
    }
}

// ヒープの例を示し、maxHeapifyメソッドを使ってそれが最大ヒープになるように調整します。
const heap1 = [2, 42, 11, 30, 10, 7, 6, 5, 9];
// 根ノードが2で、2 < 42のため、最大ヒープではありません。
Heap.maxHeapify(heap1, 0);
console.log(heap1);

const heap2 = [56, 4, 51, 10, 12, 5, 12, 4, 6, 5];
// インデックス1が4で、4 < 10のため、最大ヒープではありません。
Heap.maxHeapify(heap2, 1);
console.log(heap2);