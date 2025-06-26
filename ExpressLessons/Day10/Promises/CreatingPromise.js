//🔧 Creating a Promise

const  myPromise = new Promise((resolve, reject) => {
    // asynchronous operation
    setTimeout(() => {
      const success = true; // Simulate success or failure
      if (success) {
        // Resolve the promise with data
        console.log("Promise resolved with data", resolve);
      } else {
        // Reject the promise with an error
        console.error("Promise rejected with an error", reject);
      }
    }, 1000)
})

// ✅ Using a Promise

myPromise
  .then((data) => {
    console.log("Then:", data);
  })
  .catch((error) => {
    console.error("Catch:", error);
  });

  // Resolve and Reject are functions that control the outcome of the promise.
  // If the asynchronous operation is successful, you call resolve with the result.
  // If it fails, you call reject with an error message or object.
  
  // The .then() method is used to handle the resolved value, and .catch() is used to handle any errors that occur during the promise's execution.

  const myPromise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    const success = true;

    if (success) {
      resolve("It worked!");   // Success —> .then() will run
    } else {
      reject("It failed.");    // Error —> .catch() will run
    }
  }, 1000);
});
myPromise2
  .then((data) => {
    console.log("Then:", data);
  })
  .catch((error) => {
    console.error("Catch:", error);
  });

  // 🧪 Real Example - A promise-based function:
  function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = { user: "Daniel" };
      resolve(data); // or reject("Error") to simulate failure
    }, 1000);
  });
}

// Using the Promise
fetchData()
  .then((data) => {
    console.log("User data:", data);
    return "Next step";
  })
  .then((msg) => {
    console.log("Message:", msg);
  })
  .catch((err) => {
    console.error("Something went wrong:", err);
  });

  // Behind the screnes
  /**
    | Stage           | What’s Happening          |
    | --------------- | ------------------------- |
    | `new Promise()` | You define the async task |
    | `resolve()`     | Task succeeded            |
    | `reject()`      | Task failed               |
    | `.then()`       | Called when resolved      |
    | `.catch()`      | Called when rejected      |

   */