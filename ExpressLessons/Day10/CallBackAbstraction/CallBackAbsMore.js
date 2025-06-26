// ✅ 1. Reusable Logger (Sync callback abstraction)
/**
 * 💡 Use case: You want to log messages in different formats — plain, uppercase, or with emojis.
🔧 Function with callback abstraction:
 * 
 */
function logMessage(message, formatCallback) {
    const output = formatCallback(message);
    console.log(output);
}

logMessage("Hello, World!", (msg) => msg); // Plain text
logMessage("Hello, World!", (msg) => msg.toUpperCase()); // Uppercase
logMessage("Hello, World!", (msg) => `💬 ${msg} 💬`); // With emojis

logMessage("Hello, World!", msg => msg); // Plain text
logMessage("Hello, World!", msg => msg.toUpperCase()); // Uppercase
logMessage("Hello, World!", msg => `💬 ${msg} 💬`); // With emojis

//
/**
 * ✅ 2. User Authentication Flow (Async callback abstraction)
💡 Use case: Authenticate user and allow custom handling based on success or failure.
 */
function authenticateUser(username, password, callback) {
    setTimeout(()=> {
        if(username === "admin" && password === "1234") {
            callback(null, {user: 'admin', role: 'administrator'})
        }
        else{
            callback(new Error("Invalid credentials"), null);
        }
    }, 1000)
}

authenticateUser("admin", "1234", (error, user) => {
    if(error){
        console.error("Authentication failed:", error.message);
    }
    else{
        console.log("Authentication successful:", user);
    }
})

//🧠 This lets the function remain generic and caller defines what to do with the result.
//✅ 3. Search and Act (Callback inside array operations)
//      Use case: Find a user and do something with it.
const userData = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" }
];
function findUser(users, condition, callback) {
    const user = users.find(condition);
    callback(user)
}

findUser(userData, user => user.name === 'Bob', user => {
    if(user) {
        console.log("User found:", user);
    }
    else{
        console.log("User not found !");
    }
} )