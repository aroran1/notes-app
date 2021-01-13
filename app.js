const fs = require('fs');
const validator = require('validator');
const chalk = require('chalk');
const getNotes = require('./notes');

// Challenge 1
fs.writeFileSync('./generated-files/notes.txt', 'This file is created by node fs!');
// fs.writeFileSync('notes.txt', 'Created by- Nidhi Arora'); Overwites the first line
// to append use appendFileSync method
fs.appendFileSync('./generated-files/notes.txt', ' Created by- Nidhi Arora');

const msg = getNotes();
console.log(msg);
console.log(validator.isEmail("dfdj.sdjhfsd@sdhfhs.com"));
console.log(chalk.green('Success!'));
console.log(chalk.blue.bgRed.bold('Hello world!'));