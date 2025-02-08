📑 Agenda for Day 05: TypeScript Fundamentals
🎯 [ Focus: Mastering the basics of TypeScript with a foundation in JavaScript concepts ]  

🕝 Session Highlights

1️⃣ Recap
   - Key Takeaways from Day 05.  

2️⃣ Understanding Arrays in JavaScript  
* Basics of Arrays: What and Why?  
* Common Methods and Operations on Arrays.  

3️⃣ Promises in JavaScript
* Asynchronous Programming: Callbacks vs. Promises.  
* Anatomy of a Promise: States and Methods (then, catch).  
* Real-world Use Case: Fetching Data Using Promises.  

4️⃣ Introduction to TypeScript
* What is TypeScript, and Why Use It?  
* Setting Up a TypeScript Environment.  
* Basic Syntax and First TypeScript Program.  

5️⃣ TypeScript Types  
* Overview of Types in TypeScript:  
* Hands-on: Declaring Variables with Different Types.  

6️⃣ Explicit Types & Annotations 
* Why Use Type Annotations?  
* Explicitly Defining Function Parameters and Return Types.  
* Examples:  
     * Using Annotations with Arrays, Objects, and Functions.  
     * Type Inference vs. Explicit Types.  

## JavaScript Arrays and Methods (Browser Automation Examples)

In JavaScript, an array is a special type of object used to store multiple values in a single variable. Arrays can store any type of data, including strings, numbers, objects, or even other arrays.

When automating browsers (e.g., using tools like Playwright or Selenium), arrays can be useful for managing multiple elements, handling multiple browser tabs, or collecting data from web pages.

## Creating an Array

You can create an array in several ways:

### Using square brackets (literal notation):
```js
let browsers = ['Chrome', 'Firefox', 'Edge'];
```

### Using the `Array` constructor:
```js
let browsers = new Array('Chrome', 'Firefox', 'Edge');
```

## Common Array Methods

JavaScript provides several methods to manipulate arrays. 

### 1. `push()`

Adds one or more elements to the end of an array and returns the new length of the array.

Example: Adding a new browser type to a list of browsers.
```js
let browsers = ['Chrome', 'Firefox'];
browsers.push('Edge'); // ['Chrome', 'Firefox', 'Edge']
```

### 2. `pop()`

Removes the last element from an array and returns that element.

Example: Removing the last opened browser tab.
```js
let tabs = ['Tab1', 'Tab2', 'Tab3'];
tabs.pop(); // ['Tab1', 'Tab2']
```

### 3. `shift()`

Removes the first element from an array and returns that element.

Example: Removing the first opened tab in the browser.
```js
let tabs = ['Tab1', 'Tab2', 'Tab3'];
tabs.shift(); // ['Tab2', 'Tab3']
```

### 4. `unshift()`

Adds one or more elements to the beginning of an array and returns the new length of the array.

Example: Adding a new browser session to the beginning of a list of sessions.
```js
let sessions = ['Session2', 'Session3'];
sessions.unshift('Session1'); // ['Session1', 'Session2', 'Session3']
```

### 5. `concat()`

Merges two or more arrays without changing the original arrays.

Example: Merging two sets of browser sessions.
```js
let sessionSet1 = ['Session1', 'Session2'];
let sessionSet2 = ['Session3', 'Session4'];
let allSessions = sessionSet1.concat(sessionSet2); // ['Session1', 'Session2', 'Session3', 'Session4']
```

### 6. `slice()`

Returns a shallow copy of a portion of an array into a new array. You can specify the start and end indices (the end is not included).

Example: Getting a subset of active browser tabs.
```js
let tabs = ['Tab1', 'Tab2', 'Tab3', 'Tab4'];
let recentTabs = tabs.slice(1, 3); // ['Tab2', 'Tab3']
```

### 7. `splice()`

Adds/removes items to/from an array and returns the removed items.

Example: Closing the second tab and opening a new one.
```js
let tabs = ['Tab1', 'Tab2', 'Tab3'];
tabs.splice(1, 1, 'Tab4'); // ['Tab1', 'Tab4', 'Tab3']
```

### 8. `indexOf()`

Returns the first index at which a given element can be found in the array, or `-1` if it is not present.

Example: Finding the index of a specific browser tab.
```js
let tabs = ['Tab1', 'Tab2', 'Tab3'];
let index = tabs.indexOf('Tab2'); // 1
```

### 9. `includes()`

Determines whether an array contains a certain element, returning `true` or `false`.

Example: Checking if a tab is open.
```js
let tabs = ['Tab1', 'Tab2', 'Tab3'];
let isTabOpen = tabs.includes('Tab2'); // true
```

### 10. `join()`

Joins all elements of an array into a string.

Example: Logging all active browser tabs as a comma-separated string.
```js
let tabs = ['Tab1', 'Tab2', 'Tab3'];
let tabString = tabs.join(', '); // 'Tab1, Tab2, Tab3'
```

### 11. `forEach()`

Executes a provided function once for each array element.

Example: Logging each active browser tab.
```js
let tabs = ['Tab1', 'Tab2', 'Tab3'];
tabs.forEach(tab => console.log(tab));
// Output: Tab1, Tab2, Tab3
```

### 12. `map()`

Creates a new array populated with the results of calling a provided function on every element in the array.

Example: Appending "-Checked" to all tab names.
```js
let tabs = ['Tab1', 'Tab2', 'Tab3'];
let checkedTabs = tabs.map(tab => tab + '-Checked'); // ['Tab1-Checked', 'Tab2-Checked', 'Tab3-Checked']
```

### 13. `filter()`

Creates a new array with all elements that pass the test implemented by the provided function.

Example: Filtering only tabs that contain the word 'Login'.
```js
let tabs = ['LoginPage', 'HomePage', 'LoginModal', 'Dashboard'];
let loginTabs = tabs.filter(tab => tab.includes('Login')); // ['LoginPage', 'LoginModal']
```

### 14. `reduce()`

Executes a reducer function on each element of the array, resulting in a single output value.

Example: Counting total number of characters in all tab names.
```js
let tabs = ['Tab1', 'Tab2', 'Tab3'];
let totalChars = tabs.reduce((acc, current) => acc + current.length, 0); // 12
```

### 15. `find()`

Returns the value of the first element in the array that satisfies the provided testing function. Otherwise, it returns `undefined`.

Example: Finding the first tab with more than 4 characters.
```js
let tabs = ['Tab1', 'LongTabName', 'Tab3'];
let longTab = tabs.find(tab => tab.length > 4); // 'LongTabName'
```

### 16. `findIndex()`

Returns the index of the first element in the array that satisfies the provided testing function. Otherwise, it returns `-1`.

Example: Finding the index of the first tab with more than 4 characters.
```js
let tabs = ['Tab1', 'LongTabName', 'Tab3'];
let longTabIndex = tabs.findIndex(tab => tab.length > 4); // 1
```

### 17. `reverse()`

Reverses the order of the elements in the array.

Example: Reversing the order of browser tabs.
```js
let tabs = ['Tab1', 'Tab2', 'Tab3'];
tabs.reverse(); // ['Tab3', 'Tab2', 'Tab1']
```

## Callback and Callback Hell

A callback is a function passed into another function as an argument to be executed later.

Callback Hell, also known as the pyramid of doom, is a situation where callbacks are nested within other callbacks several levels deep, making the code hard to read and maintain.

## Asynchronous JavaScript

### Promises

A Promise is an object representing the eventual completion or failure of an asynchronous operation.

```javascript
let myPromise = new Promise(function(resolve, reject) {
    setTimeout(() => resolve("Data received"), 3000);
});
```

### Async/Await

`async` and `await` are syntactic sugar built on top of promises. They make asynchronous code look and behave a little more like synchronous code.

```javascript
async function fetchData() {
    let data = await fetch('https://api.leaftaps.com/data');
    console.log(data);
}
```

# Introduction to TypeScript

## TypeScript (TS) and TypeScript Compiler (TSC)

TypeScript is a superset of JavaScript that adds static types. To run TypeScript, you need to compile it into JavaScript using the TypeScript Compiler (TSC).

### Installation Commands

Install TypeScript globally via npm:

```bash
npm install -g typescript
```

## TypeScript Variable Declaration and Syntax

Variables in TypeScript can be declared using `let` or `const`, similar to JavaScript.

```typescript
let username: string = "Babu";
```

## 1. Type Inference

TypeScript is designed with type inference capabilities, which means that you often don't need to explicitly specify a type because TypeScript can infer it based on the value assigned to a variable.

```typescript
let example = "Hello, TypeScript!"; // inferred as string
```

## 2. Explicit Types

You can explicitly declare the type of a variable, function return type, or the type of parameters directly in the code to ensure the values conform to expectations.

```typescript
let count: number;
count = 123; // only numbers can be assigned
```

## 3. Type Annotations

Type annotations in TypeScript are used to explicitly specify the type of variables, function parameters, and return types.

```typescript
function displayMessage(name: string): string {
    return `Hello, ${name}!`;
}
```