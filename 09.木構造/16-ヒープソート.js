class Heap{
    static left(i){
        return 2*i + 1;
    }

    static right(i){
        return 2*i + 2;
    }
    
    static parent(i){
        return Math.floor((i-1) / 2);
    }    

    static maxHeapify(arr, i){
        let l = Heap.left(i);
        let r = Heap.right(i);

        let biggest = i;
        if(l < arr.length && arr[l] > arr[biggest]) biggest = l;
        if(r < arr.length && arr[r] > arr[biggest]) biggest = r;

        if(biggest != i){
            let temp = arr[i];
            arr[i] = arr[biggest];
            arr[biggest] = temp;
            Heap.maxHeapify(arr,biggest);
        }
    }

    static buildMaxHeap(arr){
        let middle = Heap.parent(arr.length)
        for(let i = middle; i >=0; i--){
            Heap.maxHeapify(arr,i);
        }    
    }

    // ここから実装してください。
    // heapSort
    
}

let heap1 = [2,42,11,30,10,7,6,5,9];
console.log(heap1);
// Heap.heapSort(heap1);
console.log(heap1);

let heap2 = [56,4,51,10,12,5,12,4,6,5];
console.log(heap2);
// Heap.heapSort(heap2);
console.log(heap2);