const fs = require('fs');
const validator = require('validator');
const chalk = require('chalk');
const getNotes = require('./notes');

const greenMsg = chalk.green.inverse.bold('Success!');
const blueRedMsg = chalk.blue.bgRed.bold('Error!');

// Challenge 1
fs.writeFileSync('./generated-files/notes.txt', 'This file is created by node fs!');
// fs.writeFileSync('notes.txt', 'Created by- Nidhi Arora'); Overwites the first line
// to append use appendFileSync method
fs.appendFileSync('./generated-files/notes.txt', ' Created by- Nidhi Arora');

const msg = getNotes();
console.log(msg);
console.log(validator.isEmail("dfdj.sdjhfsd@sdhfhs.com"));
console.log(greenMsg);
console.log(blueRedMsg);