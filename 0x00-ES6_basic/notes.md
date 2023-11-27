# ES6

ECMAScript 2015 (ES6) is the sixth edition of the ECMAScript standard, introducing several new features and enhancements to JavaScript.

## New Features in ES6

- **let and const Declarations:** `let` allows block-scoped variables, while `const` is used for constants with block scope.
- **Arrow Functions:** A concise way to write anonymous functions using the `=>` syntax.
- **Default Parameters for Functions:** Set default values for function parameters.
- **Template Literals:** Define strings using backticks, enabling string interpolation.
- **Destructuring Assignment:** Extract values from arrays and objects more concisely.
- **Spread and Rest Operators:** Spread (`...`) expands iterables; rest parameters (`...`) gather parameters into an array.
- **Class Syntax:** Introduces a structured way to define classes and work with inheritance.

## Constants vs. Variables

- **Variable:** Storage location identified by a memory address; its value can change.
- **Constant:** Variable whose value cannot be changed after assignment.

## Block-scoped Variables

- `let` and `const` declarations are block-scoped, limited to the block in which they are defined.

## Arrow Functions and Default Parameters

- **Arrow Functions:** Concise syntax for anonymous functions.
- **Default Parameters:** Set default values for function parameters.

## Rest and Spread Function Parameters

- **Spread (`...`):** Array/object expansion.
- **Rest (`...`):** Gathers parameters into an array.

## String Templating in ES6

- Template literals use backticks (\`) for defining strings and allow variable interpolation.

## Object Creation and Properties in ES6

- ES6 introduced concise methods for creating and working with objects, including shorthand property names.

## Iterators and for-of Loops

- **Iterators:** Provide a way to iterate over elements of a collection.
- **for-of Loop:** Iterate over iterable objects, simplifying work with arrays and other iterable structures.

# ESLint Configuration

## Configuration Properties:

### `env`

Specifies the environment.

- `browser: false`: The code is not intended to run in a browser environment.
- `es6: true`: ES6 features are allowed.
- `jest: true`: Jest testing framework globals are allowed.

### `extends`

Extends the configurations of other ESLint configurations.

- `'airbnb-base'`: Extends the Airbnb JavaScript style guide for ES6 and beyond.
- `'plugin:jest/all'`: Extends the Jest plugin's recommended rules.

### `globals`

Defines global variables that are predefined.

- `Atomics` and `SharedArrayBuffer` are marked as `'readonly'`.

### `parserOptions`

Specifies the ECMAScript version and the source type.

- `ecmaVersion: 2018`: Specifies ECMAScript 2018 as the target version.
- `sourceType: 'module'`: Specifies that the code should be interpreted as using ECMAScript modules.

### `plugins`

Specifies ESLint plugins to use.

- `'jest'`: Enables the Jest plugin.

### `rules`

Configures ESLint rules.

- `'no-console': 'off'`: Allows the use of `console` statements.
- `'no-shadow': 'off'`: Allows variable shadowing.
- `'no-restricted-syntax'`: Disallows specific syntax constructs.
- `'LabeledStatement'` and `'WithStatement'` are disallowed.

### `overrides`

Allows the configuration to vary based on file or directory.

- For files with the extension `.js`:
- `'babel.config.js'` is excluded from this configuration.

# Babel Node
`babel-node` is a command-line tool that comes with Babel, a JavaScript compiler. Babel is often used to transpile modern ECMAScript (ES6+ and beyond) code into an older version of JavaScript that can be run in environments that don't support the latest language features. The purpose of `babel-node` is to provide a convenient way to execute JavaScript files directly, while also allowing for the use of modern language features.

1. **Transpilation:** Babel, when used with `babel-node`, transpiles your ECMAScript code on the fly. This means that you can write your code using the latest language features (ES6 and beyond), and `babel-node` will convert it into a compatible version (usually ES5) that can be executed in most JavaScript environments.

2. **Convenience:** Instead of having to run a separate build step to transpile your code before executing it, `babel-node` allows you to run your JavaScript files directly, and it takes care of the transpilation process automatically.

3. **Support for JSX:** If your JavaScript code includes JSX (JavaScript XML), which is commonly used with React, `babel-node` can also handle the transpilation of JSX into regular JavaScript.

To use `babel-node`, you need to have Babel and its presets installed. You can run JavaScript files with `babel-node` like this:

```bash
babel-node your_script.js
```

Keep in mind that using `babel-node` in a production environment is generally discouraged because it incurs a runtime performance overhead due to on-the-fly transpilation. For production, it's more common to pre-transpile the code during a build step and then execute the transpiled code.

# Hoisting:
Hoisting is a JavaScript behavior where variable and function declarations are moved to the top of their containing scope during the compilation phase. This means that you can use a variable or function before it's declared in the code.

However, it's important to note that only the declarations are hoisted, not the initializations. Variables declared with var are hoisted and initialized with undefined by default.

# Computed property names:

allows dynamically compute the names of object properties.
```js
// ES6 Computed Property
const dynamicKey = 'color';

const car = {
  brand: 'Toyota',
  [dynamicKey]: 'blue', // Computed property name
  'year': 2022,
};

console.log(car); // Outputs: { brand: 'Toyota', color: 'blue', year: 2022 }

```
