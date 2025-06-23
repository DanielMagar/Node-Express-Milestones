const fs = require('fs');
const path = require('path');

const dataToWrite = {
    repsonse:
    [
        {name: "John", age: 30, city: "New York"},
        {name: "Jane", age: 25, city: "Los Angeles"},
        {name: "Mike", age: 35, city: "Chicago"}
    ]
}

const dataToJson = JSON.stringify(dataToWrite);

console.log(dataToJson);

const filePath = path.join(__dirname, 'data.json');

// Write the JSON data to a file
fs.writeFile(filePath, dataToJson, 'utf-8', (err) => {
    if(err){
        console.error('Error writing to file:', err);
    }
    else{
        console.log('Data written to file successfully!');
    }
})

// Read the JSON data from the filef\
fs.readFile(filePath, 'utf-8', (err, data)=>{
    if(err){
        console.error('Error reading from file:', err);
    }
    else{
        try {
             const parsedData = JSON.parse(data);
             console.log('Data read from file:', parsedData);
        } catch (error) {
            console.error('Error parsing JSON data:', error);
        }
    }
})