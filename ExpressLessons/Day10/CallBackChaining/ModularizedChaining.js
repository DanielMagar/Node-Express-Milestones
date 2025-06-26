function step1(cb) {
  setTimeout(() => {
    console.log("Step 1");
    cb();
  }, 1000);
}

function step2(cb) {
  setTimeout(() => {
    console.log("Step 2");
    cb();
  }, 1000);
}

function step3() {
  setTimeout(() => {
    console.log("Step 3");
  }, 1000);
}

function start() {
  step1(() => step2(() => step3()));
}

start();
