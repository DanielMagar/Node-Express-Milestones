function taskA() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve("Result A");
    }, 1000);
  });
}

function taskB() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve("Result B");
    }, 2000);
  });
}

function taskC() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve("Result C");
    }, 1500);
  });
}

Promise.all([taskA(), taskB(), taskC()])
  .then(results => {
    console.log("✅ All done:", results);
  })
  .catch(err => {
    console.error("❌ One task failed:", err);
  });
