const fs = require('fs');

fs.writeFile('asyncFile.txt', 'Hello Danu, this is an example of Async File System', (err) => {
    if(err) {
        console.log('Error writing file:', err);
    }
    else{
        console.log('File created asynchronously!');
    }
})