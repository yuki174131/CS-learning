function heapsort(intArr:number[]): number[]{
    maxHeap(intArr);

    let heapEnd: number = intArr.length - 1;
    while (heapEnd !== 0) {
        const temp: number = intArr[heapEnd];
        intArr[heapEnd] = intArr[0];
        intArr[0] = temp;
        heapEnd--;
        maxHeapify(intArr, heapEnd, 0);
    }

    return intArr;
}

function maxHeap(arr: number[]): void {
    const middle: number = Math.floor((arr.length - 1) / 2);

    for (let i = middle; i >= 0; i--) {
        maxHeapify(arr, arr.length, i);
    }
}

function maxHeapify(arr: number[], heapEnd: number, i: number): void {
    const l: number = i * 2 + 1;
    const r: number = i * 2 + 2;

    let biggest: number = i;

    if (l <= heapEnd && arr[l] > arr[biggest]) biggest = l;
    if (r <= heapEnd && arr[r] > arr[biggest]) biggest = r;

    if (biggest !== i) {
        const temp: number = arr[i];
        arr[i] = arr[biggest];
        arr[biggest] = temp;
        maxHeapify(arr, heapEnd, biggest);
    }
}