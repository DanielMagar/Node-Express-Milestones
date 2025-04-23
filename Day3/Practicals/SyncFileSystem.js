const fs = require('fs');

fs.writeFileSync('syncfile.txt', 'Hello Folks!');
console.log('File Created.')