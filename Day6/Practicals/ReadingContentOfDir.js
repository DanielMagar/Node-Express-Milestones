const fs = require("fs/promises");

//Reading the contents of a directory

async function readDirectory() {
    try {
        const files = await fs.readdir("./NewDirectory");
        console.log("Directory contents:", files);
    } catch (error) {
        console.error("Error reading directory:", error)
    }
}

readDirectory();
//Returns an array of file and folder names inside the directory.