// 🧱 Example Without Abstraction (Hardcoded Callback):
function fetchData() {
  setTimeout(() => {
    const data = { user: "Daniel" };
    console.log("Fetched data:", data);
  }, 1000);
}

fetchData();

// /➡️ The logic after fetching is fixed.
//------------------------------------------------
//✅ Example With Callback Abstraction:
function fetchData(callback){
    setTimeout(() => {
        const data = {user: "Daniel"};
        callback(data);

    }, 1000)
}
fetchData((data)=> {
    console.log("Received data:", data);
    // You can now handle the data however you want
    // This could be logging, updating UI, etc.
})


