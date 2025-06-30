const express = require('express');;
const app = express();

const PORT = 3100;

// Set ejs as the template engine
app.set('view engine', 'ejs');

//server static files (like css, images) from the public directory
app.use(express.static('public'));

//
app.get('/', (req, res) => {
  const user = {
    name: 'John Wick',
    age: 30,
    hobbies: ['reading', 'gaming', 'hiking', 'playing guitar', 'video editing', 'singing']
  };
  res.render('index', { user });
})

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});