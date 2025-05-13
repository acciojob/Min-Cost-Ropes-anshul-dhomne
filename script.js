class MinHeap {
    constructor(arr) {
        this.heap = [];
        this.buildHeap(arr);
    }

    buildHeap(arr) {
        for (let num of arr) {
            this.insert(num);
        }
    }

    insert(num) {
        this.heap.push(num);
        this.bubbleUp();
    }

    bubbleUp() {
        let index = this.heap.length - 1;
        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);
            if (this.heap[index] >= this.heap[parentIndex]) break;
            [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
            index = parentIndex;
        }
    }

    remove() {
        if (this.heap.length === 1) return this.heap.pop();
        const min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.bubbleDown();
        return min;
    }

    bubbleDown() {
        let index = 0;
        const length = this.heap.length;
        while (true) {
            let leftChildIndex = 2 * index + 1;
            let rightChildIndex = 2 * index + 2;
            let smallestIndex = index;

            if (leftChildIndex < length && this.heap[leftChildIndex] < this.heap[smallestIndex]) {
                smallestIndex = leftChildIndex;
            }
            if (rightChildIndex < length && this.heap[rightChildIndex] < this.heap[smallestIndex]) {
                smallestIndex = rightChildIndex;
            }
            if (smallestIndex === index) break;
            [this.heap[index], this.heap[smallestIndex]] = [this.heap[smallestIndex], this.heap[index]];
            index = smallestIndex;
        }
    }

    size() {
        return this.heap.length;
    }
}

function mincost(arr) {
    let totalCost = 0;
    let heap = new MinHeap(arr);

    while (heap.size() > 1) {
        let first = heap.remove(); // Get the smallest
        let second = heap.remove(); // Get the second smallest
        let cost = first + second; // Combine them
        totalCost += cost; // Add to total cost
        heap.insert(cost); // Insert the combined rope back
    }

    return totalCost;
}

// Example usage
console.log(mincost([4, 3, 2, 6])); // Output: 29
console.log(mincost([1, 2, 3, 4, 5])); // Output: 33