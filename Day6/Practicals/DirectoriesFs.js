// 📁 Node.js File System: Working with Directories
//Using the fs.promises API, you can perform tasks like:

const fs = require("fs/promises");
//Option 1: require('fs/promises')
// Directly imports only the fs.promises API.

// It's cleaner if you're only using promise-based methods.

// Introduced in Node.js v14.0.0+

//

// ✅ Option 2: require('fs').promises

// First imports the entire fs module, then accesses the .promises property.

// Slightly less efficient, but works in earlier versions (Node.js v10.0.0+).
async function createDirectory() {
  try {
    await fs.mkdir("NewDirectory");
    // await fs.mkdir('nested/dir/structure', { recursive: true });
    // The recursive option allows you to create nested directories in one go.
    console.log("Directory created successfully!");
  } catch (error) {
    console.error("Error creating directory:", error);
  }
}
createDirectory()

//    fs.mkdir(path) creates a directory at the given path.

// Optional: recursive: true will create parent directories if needed.