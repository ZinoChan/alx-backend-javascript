## 1. Promises
A Promise is an object representing the eventual completion or failure of an asynchronous operation. It is commonly used for handling asynchronous operations, such as making network requests or reading files, where the result is not immediately available. A Promise can be in one of three states: pending, fulfilled, or rejected.

## 2. How to use `then`, `resolve`, `catch` methods
- **`then` method:** It is used to handle the successful fulfillment of a Promise. It takes two optional callback functions as arguments – one for the success case and one for the failure case.

  ```javascript
  someAsyncFunction()
    .then(result => {
      // Handle successful fulfillment
      console.log(result);
    })
    .catch(error => {
      // Handle error
      console.error(error);
    });
```
