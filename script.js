function mincost(arr) {
    // Min Heap implementation using JavaScript
    class MinHeap {
        constructor() {
            this.heap = [];
        }

        insert(val) {
            this.heap.push(val);
            this._bubbleUp();
        }

        extractMin() {
            if (this.heap.length === 1) return this.heap.pop();
            const min = this.heap[0];
            this.heap[0] = this.heap.pop();
            this._bubbleDown();
            return min;
        }

        _bubbleUp() {
            let index = this.heap.length - 1;
            while (index > 0) {
                let parentIndex = Math.floor((index - 1) / 2);
                if (this.heap[parentIndex] <= this.heap[index]) break;
                [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];
                index = parentIndex;
            }
        }

        _bubbleDown() {
            let index = 0;
            const length = this.heap.length;
            while (true) {
                let left = 2 * index + 1;
                let right = 2 * index + 2;
                let smallest = index;

                if (left < length && this.heap[left] < this.heap[smallest]) smallest = left;
                if (right < length && this.heap[right] < this.heap[smallest]) smallest = right;

                if (smallest === index) break;
                [this.heap[smallest], this.heap[index]] = [this.heap[index], this.heap[smallest]];
                index = smallest;
            }
        }

        size() {
            return this.heap.length;
        }
    }

    const heap = new MinHeap();
    for (let length of arr) {
        heap.insert(length);
    }

    let totalCost = 0;

    while (heap.size() > 1) {
        const first = heap.extractMin();
        const second = heap.extractMin();
        const cost = first + second;
        totalCost += cost;
        heap.insert(cost);
    }

    return totalCost;
}

// Example usage:
console.log(mincost([4, 3, 2, 6])); // Output: 29
console.log(mincost([1, 2, 3, 4, 5])); // Output: 33
