function mincost(arr) {
    let totalCost = 0;
    let heap = new MinHeap(arr); // Assume MinHeap is implemented

    while (heap.size() > 1) {function mincost(arr) {
    // Create a min-heap using a priority queue
    let heap = [...arr];
    heap.sort((a, b) => a - b);  // initial sort

    let totalCost = 0;

    while (heap.length > 1) {
        // Pop two smallest elements
        let first = heap.shift();
        let second = heap.shift();

        // Combine them and add cost
        let cost = first + second;
        totalCost += cost;

        // Insert the combined rope back in sorted order
        // Binary insert for efficiency
        let inserted = false;
        for (let i = 0; i < heap.length; i++) {
            if (heap[i] > cost) {
                heap.splice(i, 0, cost);
                inserted = true;
                break;
            }
        }
        if (!inserted) {
            heap.push(cost);
        }
    }

    return totalCost;
}

        let first = heap.pop();
        let second = heap.pop();
        let cost = first + second;
        totalCost += cost;
        heap.push(cost);
    }

    return totalCost;
}