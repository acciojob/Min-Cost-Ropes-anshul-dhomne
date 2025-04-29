function mincost(arr) {
    // Helper functions for the min-heap
    function heapify(arr, i, size) {
        let smallest = i;
        let left = 2 * i + 1;
        let right = 2 * i + 2;

        if (left < size && arr[left] < arr[smallest]) smallest = left;
        if (right < size && arr[right] < arr[smallest]) smallest = right;

        if (smallest !== i) {
            [arr[i], arr[smallest]] = [arr[smallest], arr[i]];
            heapify(arr, smallest, size);
        }
    }

    function buildMinHeap(arr) {
        let n = arr.length;
        for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
            heapify(arr, i, n);
        }
    }

    function extractMin(arr) {
        const min = arr[0];
        arr[0] = arr[arr.length - 1];
        arr.pop();
        heapify(arr, 0, arr.length);
        return min;
    }

    function insertHeap(arr, value) {
        arr.push(value);
        let i = arr.length - 1;
        while (i > 0) {
            let parent = Math.floor((i - 1) / 2);
            if (arr[parent] <= arr[i]) break;
            [arr[parent], arr[i]] = [arr[i], arr[parent]];
            i = parent;
        }
    }

    // Build initial min-heap
    buildMinHeap(arr);
    let totalCost = 0;

    while (arr.length > 1) {
        let first = extractMin(arr);
        let second = extractMin(arr);
        let cost = first + second;
        totalCost += cost;
        insertHeap(arr, cost);
    }

    return totalCost;
}
