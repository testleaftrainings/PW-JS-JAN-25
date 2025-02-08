# JavaScript Arrays - Interview Questions and Answers

## Basic Questions

### 1. What is an array in JavaScript?
An array is a data structure in JavaScript that allows you to store multiple values in a single variable. It can hold elements of any data type, including numbers, strings, objects, and even other arrays.

#### Follow-up: How do you create an array in JavaScript?
Arrays can be created using square brackets `[]` or the `Array` constructor.

```javascript
let arr1 = [1, 2, 3];
let arr2 = new Array(1, 2, 3);
```

### 2. How can you access the last element of an array?
You can access the last element by using `array[array.length - 1]`.

#### Follow-up: What is the time complexity of accessing an element by index?
The time complexity is O(1) because accessing an element by index is a constant time operation.

### 3. What is the difference between `push()` and `unshift()` methods?
- **`push()`** adds one or more elements to the end of an array and returns the new length.
- **`unshift()`** adds one or more elements to the beginning of an array and returns the new length.

#### Follow-up: How do they affect the array's length and order?
Both methods change the length of the array by the number of elements added. `push()` maintains the original order and appends at the end, while `unshift()` adds elements to the beginning, shifting the existing elements.

### 4. How do `map()` and `forEach()` differ in their use cases?
- **`map()`** creates a new array with the results of calling a function on every element in the original array.
- **`forEach()`** executes a provided function once for each array element but does not return a new array.

#### Follow-up: Can you provide examples of when to use each?
- Use `map()` when you want to transform all elements in an array and need a new array with the transformed elements.
- Use `forEach()` when you want to perform an action for each element in an array, such as logging them, without needing to create a new array.

### 5. How does the `splice()` method work?
`splice()` can be used to add, remove, or replace elements in an array. It modifies the array in place.

#### Follow-up: What is the difference between `splice()` and `slice()`?
- `splice()` modifies the original array by adding/removing elements.
- `slice()` returns a shallow copy of a portion of the array and does not modify the original array.

### 6. Explain the difference between `filter()` and `find()` methods.
- **`filter()`** creates a new array with all elements that pass the test implemented by the provided function.
- **`find()`** returns the value of the first element that passes the test.

#### Follow-up: Can you give a use case for each?
- Use `filter()` when you want a subset of elements that meet certain criteria.
- Use `find()` when you only need the first element that matches a condition.

## Intermediate Questions

### 1. How do you remove duplicates from an array?
You can remove duplicates by using a `Set` or `filter()` with `indexOf()`:

```javascript
let unique = [...new Set(array)];
// or
let unique = array.filter((item, index) => array.indexOf(item) === index);
```

### 2. How do you flatten a nested array?
You can flatten a nested array using `Array.prototype.flat()` or `reduce()`:

```javascript
let flatArray = nestedArray.flat(Infinity);
// or
let flatArray = nestedArray.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatten(val) : val), []);
```

### 3. Explain how the `reduce()` method works.
`reduce()` executes a reducer function on each element of the array, resulting in a single output value. The reducer function takes four arguments: accumulator, current value, current index, and source array.

#### Follow-up: Can you write a function that uses `reduce()` to find the sum of an array of numbers?

```javascript
let numbers = [1, 2, 3, 4];
let sum = numbers.reduce((total, num) => total + num, 0);
console.log(sum); // Output: 10
```

### 4. What are the differences between `sort()` and `reverse()`?
- **`sort()`** sorts the elements of an array in place and can take a compare function to determine the sort order.
- **`reverse()`** reverses the order of the elements in the array.

#### Follow-up: How can you sort an array of objects by a specific property?

```javascript
let users = [{ name: 'John', age: 30 }, { name: 'Jane', age: 25 }];
users.sort((a, b) => a.age - b.age);
console.log(users); // Output: [{ name: 'Jane', age: 25 }, { name: 'John', age: 30 }]
```

### 5. How do you check if all elements in an array satisfy a certain condition?
You can use the `every()` method, which returns true if all elements pass the test implemented by the provided function.

#### Follow-up: Can you give an example using the `every()` method?

```javascript
let numbers = [2, 4, 6, 8];
let allEven = numbers.every(num => num % 2 === 0);
console.log(allEven); // Output: true
```

### 6. What are some ways to merge two arrays?
You can merge two arrays using `concat()`, the spread operator `...`, or `push()` with `apply()`.

```javascript
let arr1 = [1, 2];
let arr2 = [3, 4];
let merged1 = arr1.concat(arr2);
let merged2 = [...arr1, ...arr2];
arr1.push.apply(arr1, arr2);
```

#### Follow-up: What is the difference between using `concat()` and the spread operator?
- `concat()` is a method that returns a new array.
- The spread operator can be used to expand arrays or objects in other contexts, offering more flexibility.

## Advanced Questions

### 1. What are sparse arrays, and how do they differ from dense arrays in JavaScript?
Sparse arrays have "holes," meaning some indices are not assigned values, while dense arrays have elements at every index from 0 to length-1. Methods like `forEach()` and `map()` skip holes in sparse arrays.

### 2. How does the `Array.from()` method work?
`Array.from()` creates a new array from an array-like or iterable object. It can also accept a map function as the second argument.

```javascript
let str = 'hello';
let arr = Array.from(str);
console.log(arr); // Output: ['h', 'e', 'l', 'l', 'o']
```

### 3. Explain the concept of immutability in the context of arrays.
Immutability means the original array is not modified; instead, new arrays are created. This can be achieved using methods like `concat()`, `slice()`, or the spread operator.

#### Follow-up: How can you create an immutable array in JavaScript?
Use methods that do not modify the original array or create a deep copy using libraries like `immutable.js`.

### 4. How can you implement custom array-like objects?
Create an object with properties and methods similar to an array, including a `length` property and indexed elements, and implement iterable protocols.

```javascript
let arrayLike = { 0: 'a', 1: 'b', length: 2 };
Array.prototype.push.call(arrayLike, 'c');
console.log(arrayLike); // Output: { 0: 'a', 1: 'b', 2: 'c', length: 3 }
```

### 5. How does JavaScript handle array indices that are not valid numbers?
Indices that are not valid numbers are treated as object properties, not as part of the array's length.

#### Follow-up: Can you explain the behavior of non-numeric keys in an array?
Non-numeric keys are treated as object properties. They do not affect the `length` property or traditional array methods.

### 6. What is the significance of the `length` property in arrays?
The `length` property represents the number of elements in an array. It can also be manually set to truncate the array.

#### Follow-up: How does modifying the `length` property affect the array?
Setting the `length` property to a smaller value than the current length truncates the array. Setting it to a larger value adds empty slots at the end of the array.

This document provides an overview of common JavaScript array interview questions, their answers, and follow-up questions for further exploration. It covers basic to advanced topics, helping you prepare for technical interviews focusing on array manipulation and methods.