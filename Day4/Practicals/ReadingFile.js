// ✅ 1. Synchronous File Reading – fs.readFileSync

const fs = require("fs");

try {
  const data = fs.readFileSync("file.txt", "utf8");
  console.log("File content:\n", data);
} catch (error) {
  console.log("Error reading file:", error);
}
//🔍 Notes:
// 1.'utf8' is important — it ensures the content is returned as a string, not a Buffer.

// 2. If the file doesn't exist, this will throw an error — so wrap it in a try-catch if needed.

// ✅ 2. Asynchronous File Reading – fs.readFileSync

fs.readFile("file.txt", "utf8", (err, data) => {
  if (err) return console.log("Error reading file:", err);
});
