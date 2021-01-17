const fs = require('fs');
const validator = require('validator');
const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes');

const greenMsg = chalk.green.inverse.bold('Success!');
const blueRedMsg = chalk.blue.bgRed.bold('Error!');

// // Challenge 0
// fs.writeFileSync('./generated-files/challengeNotes.txt', 'This file is created by node fs!');
// // fs.writeFileSync('notes.txt', 'Created by- Nidhi Arora'); Overwites the first line
// // to append use appendFileSync method
// fs.appendFileSync('./generated-files/challengeNotes.txt', ' Created by- Nidhi Arora');

// const msg = notes.getNotes();
// console.log(msg);
// console.log(validator.isEmail("dfdj.sdjhfsd@sdhfhs.com"));
// console.log(greenMsg);
// console.log(blueRedMsg);

// // passing agr value to the process
// console.log(process.argv);
// // instead use yargs to make them use easily as command
// console.log(yargs.argv);
// // yargs also sets version for the file at 1.0.0 - node app.js --version
yargs.version('1.1.0');

// create yargs command - add
yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: 'string'
    },
    body: {
      describe: "Note body",
      demandOption: true,
      type: 'string'
    }
  },
  handler: function(argv) {
    // console.log(`Title: ${argv.title}`);
    // console.log(`Body: ${argv.body}`);
    notes.addNote(argv.title, argv.body);
  }
})

// create yargs command - remove
yargs.command({
  command: 'remove',
  describe: 'Remove a new note',
  handler: function(argv) {
    // console.log('Removing the notes!');
    notes.removeNote(argv.title);
  }
})

// create yargs command - list
yargs.command({
  command: 'list',
  describe: 'List all note',
  handler: function() {
    console.log('Listing out all the notes!');
  }
})

// create yargs command - read
yargs.command({
  command: 'read',
  describe: 'Reading the notes',
  handler: function() {
    console.log('Reading the notes!');
  }
})

yargs.parse();
// console.log(yargs.argv);