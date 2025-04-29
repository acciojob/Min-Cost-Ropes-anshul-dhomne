function mincost(arr) {
    let totalCost = 0;

    while (arr.length > 1) {
        // Sort array to get the two smallest ropes
        arr.sort((a, b) => a - b);

        // Take the two smallest ropes
        let first = arr.shift();
        let second = arr.shift();

        // Combine them and calculate cost
        let cost = first + second;
        totalCost += cost;

        // Add the combined rope back to the array
        arr.push(cost);
    }

    return totalCost;
}
