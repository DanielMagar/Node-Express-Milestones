// ⚡ fs.promises Version (promise-fs.js)
//This is the cleanest and most modern way to handle asynchronous file operations in Node.js.
const fs = require("fs").promises;

async function updateFile() {
  try {
    const data = await fs.readFile("File.txt", "utf8");
    const updatedData = data + "\nAppended by promise-fs.js based Node.js\n";
    await fs.writeFile("FileNewPromise.txt", updatedData);
    console.log("File Written Successfully using promise-fs.js !");
  } catch (error) {
    console.error("Error reading or writing file:", error)
  }
}

updateFile();
//  Explanation
// fs.readFile() and fs.writeFile() are now Promise-based.

// Using async/await makes the flow look synchronous but it’s still non-blocking.

// try/catch handles errors cleanly.