📑 Agenda for Day 02 - Hoisting & JavaScript Core Concepts

1️⃣ Hoisting
2️⃣ Functions 
3️⃣ Operators 

## Hoisting

Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their containing scope during the compile phase. This means that you can use functions and variables before they are declared.

- **Variable Hoisting**: Only variable declarations are hoisted to the top, not the initializations.
    ```javascript
    console.log(x); // undefined
    var x = 5;
    ```
- **Function Hoisting**: Function declarations are hoisted to the top, which allows you to invoke the function before its declaration.
    ```javascript
    greet(); // "Hello"
    function greet() {
        console.log("Hello");
    }
    ```

## Types of Functions

JavaScript functions can be classified into several types based on their declaration and usage.

- **Function Declaration**: A standard way to define a function.
    ```javascript
    function add(a, b) {
        return a + b;
    }
    ```
- **Function Expression**: A function can also be defined using an expression and can be anonymous.
    ```javascript
    const multiply = function(a, b) {
        return a * b;
    };
    ```
- **Arrow Function**: A shorter syntax for writing functions, introduced in ES6.
    ```javascript
    const subtract = (a, b) => a - b;
    ```
- **Anonymous Function**: Functions without a name, often used in function expressions.
    ```javascript
    setTimeout(function() {
        console.log("This is an anonymous function");
    }, 1000);
    ```
- **Immediately Invoked Function Expression (IIFE)**: A function that runs as soon as it is defined.
    ```javascript
    (function() {
        console.log("IIFE");
    })();
    ```
- **Constructor Function**: Used to create objects.
    ```javascript
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    const person1 = new Person("Alice", 30);
    ```
    
## Operators

JavaScript operators are symbols used to perform operations on operands.

- *Arithmetic Operators*: Perform arithmetic on numbers (`+`, `-`, `*`, `/`, `%`).
- *Comparison Operators*: Compare two values and return a boolean (`==`, `===`, `!=`, `!==`, `>`, `<`, `>=`, `<=`).
- *Logical Operators*: Used to determine the logic between variables or values (`&&`, `||`, `!`).
- *Assignment Operators*: Assign values to JavaScript variables (`=`, `+=`, `-=`, `*=`, `/=`, `%=`).


