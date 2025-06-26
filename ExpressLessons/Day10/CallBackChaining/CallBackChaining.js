// callback chaining example
// This is a simple example of callback chaining where one function calls another after completing its task.
// It demonstrates how to structure code to ensure that steps are executed in order.

// Synchronous Callback Chaining Example
function step1() {
  console.log("Step 1 Sync");
}

function step2() {
  console.log("Step 2 Sync");
}

step1();
step2();

// Asynchronous Callback Chaining Example
function step1Async(callback){
 setTimeout(() => {
    console.log("Step 1 (Async)");
    callback()
 }, 1000);
}

function step2Async(callback){
 setTimeout(() => {
    console.log("Step 2 (Async)");
    callback()
 }, 1000);
}

function step3Async(){
 setTimeout(() => {
    console.log("Step 3 (Async)");
 }, 1000);
}

// Chaining asynchronous steps
step1Async(()=> {
    step2Async(()=> {
      step3Async()
    })
})

// This example shows how to use callbacks to ensure that step2Async is called only after step1Async has completed.
// It can be extended to include more steps or more complex logic as needed.