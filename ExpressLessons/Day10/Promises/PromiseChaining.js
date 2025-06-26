function step1() {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log("Step 1 complete");
      resolve("data from step 1");
    }, 1000);
  });
}

function step2(data) {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log("Step 2 got:", data);
      resolve("data from step 2");
    }, 1000);
  });
}

function step3(data) {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log("Step 3 got:", data);
      resolve("All done!");
    }, 1000);
  });
}

// 🔗 Chaining them
step1()
  .then(result1 => step2(result1))
  .then(result2 => step3(result2))
  .then(finalResult => console.log("✅ Final Result:", finalResult))
  .catch(err => console.error("❌ Error:", err));
