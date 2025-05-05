// Removing a Directory
const fs = require("fs/promises");

// Function to remove a directory
async function removeDirectory() {
    try {
        // await fs.rmdir("NewDirectory");
        // console.log("Directory removed successfully!"); for empty directory
        // To remove a non-empty directory, use fs.rm with the recursive option:
        await fs.rm("NewDirectory", { recursive: true, force: true });
        console.log("Directory removed successfully!");
    } catch (error) {
        console.error("Error removing directory:", error);
    }
}
removeDirectory();
// NOTE:
// - fs.rmdir() removes an empty directory.
// ⚠️ The directory must be empty or it will throw an error.
// - To delete non-empty directories:
