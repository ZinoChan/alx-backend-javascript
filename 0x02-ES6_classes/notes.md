# 1. Defining a Class

```js
class Animal {
  constructor(name) {
    this.name = name;
  }

}

```

# 2. Adding Methods to a Class

```js
class Animal {
  constructor(name) {
    this.name = name;
  }

  makeSound() {
    console.log("Generic animal sound");
  }
}

```

# 3. Adding a Static Method to a Class
Static methods are associated with the class itself rather than instances of the class. You can add a static method using the static keyword:
```js
class MathOperations {
  static add(x, y) {
    return x + y;
  }
}

```
 a static method is a method that belongs to a class rather than an instance of the class. Unlike regular methods, which are associated with instances of the class and can access instance-specific data, static methods are associated with the class itself and operate on class-level data.

Key characteristics of static methods:

- **Belongs to the Class**: Static methods are defined on the class itself, not on instances of the class.

- **Accessed via Class Name**: They are called on the class itself rather than on an instance of the class.

- **No Access to Instance Data**: Since static methods are not bound to instances, they cannot access or modify instance-specific data or properties.

```js
class MathOperations {
  // Static method
  static add(x, y) {
    return x + y;
  }
}

const result = MathOperations.add(5, 3);
console.log(result); // Output: 8

```
# 4. Extending a Class
```js
class Dog extends Animal {
  bark() {
    console.log("Woof!");
  }
}

```

# 5. Metaprogramming and Symbols
Metaprogramming involves writing code that manipulates the structure or behavior of other code during runtime. Symbols are often used in metaprogramming to create unique property keys.
```js
const mySymbol = Symbol("mySymbol");

class MyClass {
  constructor() {
    this[mySymbol] = "This is a symbol property";
  }

  getSymbolProperty() {
    return this[mySymbol];
  }
}

```
symbols provide a way to create "hidden" or non-enumerable properties.
