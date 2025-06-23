// 📂 fs Module Overview
// There are 3 styles of using fs:

// Synchronous — blocks execution until the task completes.

// Asynchronous (callback-based) — non-blocking, uses callbacks.

// Promise-based (fs.promises) — async/await style (modern & clean).

//1. Read File

//Synchronous
  const fs = require('fs');
  const data = fs.readFileSync('example.txt', 'utf8');
  console.log(data)

//Asynchronous
  fs.readFile('example.txt','utf8', (err, data) => {
    if(err){
        console.error(err);
      }
      else{
        console.log(data)
      }
  })

  //Promise-based
  const fsPromises = require('fs').promises;
  async function readFile(){
    const data = await fsPromises.readFile('example.txt', 'utf8');
    console.log(data);
  }
  readFile();