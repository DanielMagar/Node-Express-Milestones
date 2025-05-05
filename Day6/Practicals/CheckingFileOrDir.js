const fs = require("fs/promises");
const path = require("path");

// Function to check if a path is a file or directory

async function checkPath(dirPath) {
  try {
    const items = await fs.readdir(dirPath);

    for (const item of items) {
      const fullPath = path.join(dirPath, item);
      const stats = await fs.lstat(fullPath);

      if (stats.isDirectory()) {
        console.log(`${item} is a directory`);
      } else if (stats.isFile()) {
        console.log(`${item} is a file`);
      }
    }
  } catch (error) {
    console.error("Error checking path:", error);
  }
}

checkPath("./NewDirectory");

//fs.lstat() gives details about a file or directory.

// stat.isDirectory() and stat.isFile() help distinguish between them.
//Note never use same name for path parameter and variable name 'path' in the code.

// ⚠️ Avoid Variable Name Shadowing
// Explanation:

// When you use a parameter or variable name that is the same as an imported module name, you override (or "shadow") the module inside that scope. In your case:
// const path = require('path');  - Node's path module
// async function checkPath(path) { ... } -  ❌ This "path" shadows the module
