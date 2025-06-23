const express = require("express");
const app = express();

const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// GET Route
app.get("/", (req, res) => {
  res.send(`GET request received! Welcome to the Express server.`);
});

// POST Route
app.post("/submit", (req, res) => {
  const name = req.body.name;
  if (name) {
    res.send(`POST request received! Hello, ${name} !`);
  } else {
    res.status(400).send;
  }
});

// PUT Route
app.put("/update/:id", (req, res) => {
//   const id = req.params.id;
  res.send(`📝 PUT request for ID ${req.params.id}`);
});

// DELETE Route
app.delete("/delete/:id", (req, res) => {
    res.send(`🗑️ DELETE request for ID ${req.params.id}`);
})

// Listening to the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
