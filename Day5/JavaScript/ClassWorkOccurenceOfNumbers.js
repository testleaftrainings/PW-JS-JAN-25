function countOccurrences(nums, k) {
    let count = 0;
    for (let num of nums) {
        if (num === k) {
            count++;
        }
    }
    return count;
}

// Example usage
const nums = [2, 4, 5, 2, 1, 2];
const k = 2;
console.log(countOccurrences(nums, k)); // Output: 3
