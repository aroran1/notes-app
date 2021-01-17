const fs = require('fs');

// GOAL:  Read a new json-challenge-1.json and change the name property and update the json-challenge-1.json file with new value
// Original Data for json-challenge-1.json
// {"name":"Nidhi Arora","planet":"Earth","Age":"infinity"}

const bufferData = fs.readFileSync('json-challenge-1.json'); // reads json data as buffer
console.log('bufferData', bufferData);
const parsedData = bufferData.toString(); // converts buffer data to JSON
console.log('parsedData', parsedData);
const jsObjData = JSON.parse(parsedData); // converts JSON to javascript object
console.log('jsObjData name', jsObjData.name);
jsObjData.name = "test name"; // update data
console.log('jsObjData name', jsObjData.name);
console.log('jsObjData', jsObjData);

const jsonData = JSON.stringify(jsObjData); // converts javascript object to JSON
console.log('jsObjData', jsonData);
// console.log(parsedData); // the original file is still with the original name
fs.writeFileSync('json-challenge-1.json', jsonData); // json file updated

// read data again
const updatedBufferData = fs.readFileSync('json-challenge-1.json'); // reads json data as buffer
console.log('updated file data', updatedBufferData.toString());
