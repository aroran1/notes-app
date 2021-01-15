const fs = require('fs');

const book = {
  title: "Ego is the Enemy",
  author: "Ryan Holiday"
}

// JSON.stringify method take in a javascript object and return a json object
const bookJson = JSON.stringify(book); 
// methods like bookJson.title will return undefined as its not a javascript object anymore
console.log(bookJson);

fs.writeFileSync('1-json.json', bookJson); // creates the json file with the passed data

// JSON.parse method take in a json object and return a javascript object
const parsedData = JSON.parse(bookJson);
console.log(parsedData);
console.log(parsedData.author);