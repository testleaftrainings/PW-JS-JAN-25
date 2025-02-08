function intersection(arr1, arr2) {
    let result = [];
    for (let num of arr1) {
        if (arr2.includes(num) && !result.includes(num)) {
            result.push(num);
        }
    }
    return result;
}

// Example calls to demonstrate functionality
console.log(intersection([1, 2, 3, 4], [3, 4, 5, 6])); // Output: [3, 4]
console.log(intersection([7, 8, 9], [10, 11, 12]));   // Output: []
console.log(intersection([1, 2, 3], [1, 2, 3]));      // Output: [1, 2, 3]
console.log(intersection([5, 5, 10, 15], [10, 5, 20])); // Output: [5, 10]
