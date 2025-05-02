const fs = require("fs");

// Writing to a file using synchronous method
try {
  fs.writeFileSync("file.txt", "Hello this a sync write file demo !");
} catch {
  console.log("Error writing file");
}

// Writing to a file using asynchronous method
fs.writeFile("fileAsync.txt", "Hello this a async write file demo !", (err) => {
    if (err) return console.log("Error writing file:", err);
    console.log("File written successfully");
})

