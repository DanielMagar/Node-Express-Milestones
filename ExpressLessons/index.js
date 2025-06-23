const express = require('express');
const app = express();

//basic routing in express
app.get('/', (req, res) => {
    res.send('Hello, Express !');
})

// start the server
app.listen(3000, ()=> {
    console.log('Server is running on http://localhost:3000');
})