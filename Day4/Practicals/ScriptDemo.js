/**
 * Reads a file called input.txt

Appends the line "Appended by Node.js\n"

Writes the updated content to output.txt
 * 
 */
const fs = require('fs');


//sync Version
try {
    const data = fs.readFileSync('file.txt', 'utf8');
    const updatedData = data + '\nAppended by Node.js\n';
    fs.writeFileSync('fileNew.txt', updatedData);
    console.log('File Written Synchronously Successfully !')
} catch (error) {
    console.error('Error reading or writing file:', error)
}

//Async Version
fs.readFile('file.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
    }
    else{
        const updatedData = data + '\nAppended by Node Js\n';
        fs.writeFile('fileNewAsync.txt', updatedData, (err) => {
            if(err) {
                console.error('Error Writing file:', err);
            }
            else{
                console.log('File Written Asynchronously Successfully !')
            }
        })
    }
})