# Difference Between OOP in TypeScript and Java

Object-Oriented Programming (OOP) is a programming paradigm widely used in TypeScript and Java. While both share common OOP principles like encapsulation, inheritance, and polymorphism, there are significant differences in their implementation and features. Below is a comparison focusing on core OOP concepts:

## 1. **Class and Object**

| Aspect                 | TypeScript                               | Java                                   |
|------------------------|------------------------------------------|----------------------------------------|
| **Class Declaration**  | Classes are syntactic sugar over prototypes. | Classes are first-class citizens.     |
| **Object Creation**    | Created using the `new` keyword.         | Created using the `new` keyword.       |
| **Static Members**     | Declared with the `static` keyword.      | Declared with the `static` keyword.    |
| **Default Values**     | Undefined by default.                   | Default values for fields (e.g., `0` for numbers). |

## 2. **Constructor**

| Aspect                 | TypeScript                               | Java                                   |
|------------------------|------------------------------------------|----------------------------------------|
| **Definition**         | Defined using the `constructor` keyword within a class. | Defined using a method with the class name. |
| **Overloading**        | Does not support true constructor overloading. Use optional parameters or default values. | Supports true constructor overloading. |
| **Access Modifiers**   | Constructors can be `public`, `private`, or `protected`. | Constructors can be `public`, `private`, or `protected`. |

## 3. **Inheritance**

| Aspect                 | TypeScript                               | Java                                   |
|------------------------|------------------------------------------|----------------------------------------|
| **Inheritance**        | Achieved using the `extends` keyword.    | Achieved using the `extends` keyword.  |
| **Single Inheritance** | Supported.                              | Supported.                             |
| **Multiple Inheritance** | Not supported for classes but achievable through mixins. | Not supported for classes; use interfaces. |
| **Method Overriding**  | Supported. Must use `super` to call parent methods. | Supported. Must use `super` to call parent methods. |

## 4. **Abstraction**

| Aspect                 | TypeScript                               | Java                                   |
|------------------------|------------------------------------------|----------------------------------------|
| **Abstract Classes**   | Declared using the `abstract` keyword.   | Declared using the `abstract` keyword. |
| **Abstract Methods**   | Declared without a body; must be implemented by derived classes. | Declared without a body; must be implemented by derived classes. |
| **Interfaces**         | Used to define structure and type-checking. | Used to define contracts for classes. |
| **Implements Keyword** | Classes can implement multiple interfaces. | Classes can implement multiple interfaces. |

## 5. **Encapsulation**

| Aspect                 | TypeScript                               | Java                                   |
|------------------------|------------------------------------------|----------------------------------------|
| **Access Modifiers**   | Supports `public`, `private`, `protected`, and `readonly`. | Supports `public`, `private`, `protected`, and package-private. |
| **Field Visibility**   | Private fields are enforced at compile-time, not runtime. | Private fields are fully enforced at runtime. |

## 6. **Polymorphism**

| Aspect                 | TypeScript                               | Java                                   |
|------------------------|------------------------------------------|----------------------------------------|
| **Method Overloading** | Not supported directly; achieved using optional parameters or unions. | Supported with true method overloading. |
| **Method Overriding**  | Supported; base class methods can be overridden in derived classes. | Supported; base class methods can be overridden in derived classes. |

## 7. **Typing**

| Aspect                 | TypeScript                               | Java                                   |
|------------------------|------------------------------------------|----------------------------------------|
| **Static Typing**      | Optional static typing using type annotations. | Enforced static typing.               |
| **Type Inference**     | Strong type inference capabilities.      | Limited type inference.               |
| **Generics**           | Supported with syntax similar to Java.  | Supported, heavily used.              |

## 8. **Runtime Behavior**

| Aspect                 | TypeScript                               | Java                                   |
|------------------------|------------------------------------------|----------------------------------------|
| **Execution**          | Runs in a JavaScript engine (browser/Node.js). | Runs in the JVM.                      |
| **Reflection**         | Limited reflection capabilities.         | Robust reflection capabilities via `java.lang.reflect`. |
| **Error Handling**     | Relies on JavaScript’s error handling model. | Strong, with checked and unchecked exceptions. |

## 9. **Support for Functional Programming**

| Aspect                 | TypeScript                               | Java                                   |
|------------------------|------------------------------------------|----------------------------------------|
| **Lambda Functions**   | Arrow functions (`=>`).                 | Lambda expressions (`->`).            |
| **Higher-Order Functions** | Supported.                           | Supported.                            |
| **First-Class Functions** | Fully supported.                      | Limited support (functions are not first-class citizens). |

## 10. **Tooling and Ecosystem**

| Aspect                 | TypeScript                               | Java                                   |
|------------------------|------------------------------------------|----------------------------------------|
| **IDEs**               | Popular with VS Code and other editors with plugins. | Popular with IntelliJ IDEA, Eclipse, etc. |
| **Build Tools**        | Node.js-based tools (e.g., npm, Webpack). | Maven, Gradle, Ant.                   |
| **Testing Frameworks** | Jasmine, Mocha, Jest.                   | JUnit, TestNG.                        |

## Summary

TypeScript is designed to bring modern development features to JavaScript while providing type safety, making it suitable for front-end and lightweight back-end applications. Java, on the other hand, is a full-fledged programming language with a robust standard library and enterprise-level support, ideal for large-scale, backend-intensive applications.

