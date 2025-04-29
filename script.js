function mincost(arr) {
    let totalCost = 0;

    while (arr.length > 1) {
        // Sort the array to get the two smallest ropes
        arr.sort((a, b) => a - b);

        // Take the two smallest ropes
        let first = arr[0];
        let second = arr[1];

        // Combine them and add the cost
        let cost = first + second;
        totalCost += cost;

        // Remove the two ropes and add the new one
        arr.splice(0, 2); // remove first two elements
        arr.push(cost);
    }

    return totalCost;
}
