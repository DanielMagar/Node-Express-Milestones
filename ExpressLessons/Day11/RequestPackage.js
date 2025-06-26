const request = require('request');
const url = 'https://jsonplaceholder.typicode.com/posts/1';

// Making a GET request using the request package
request(url, {json: true}, (error, response, body) => {
    if(error){
        console.error('Error:', error);
        return
    }
    else{
        if(response.statusCode === 200){
            // Parsing the JSON response
            // const data = JSON.parse(body); if you want to parse manually
            console.log('Data:', body);
        }
        else{
            console.error('Failed to fetch data. Status Code:', response.statusCode);
        }
    }
})