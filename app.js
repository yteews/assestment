function compareTriplets(a, b) {
    let pointA = 0;
    let pointB = 0;

    for (let i = 0; i < a.length; i++) {
        if (a[i] > b[i]) {
            pointA++;
        } else if (a[i] < b[i]) {
            pointB++;
        }
    }

    return [pointA, pointB];
}

// Example usage:
let result = compareTriplets([17, 28, 30], [99, 16, 8]);
console.log(result); 