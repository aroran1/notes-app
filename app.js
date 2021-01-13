const fs = require('fs');

fs.writeFileSync('notes.txt', 'This file is created by node fs!');


// fs.writeFileSync('notes.txt', 'Created by- Nidhi Arora'); Overwites the first line

// to append use appendFileSync method

fs.appendFileSync('notes.txt', 'Created by- Nidhi Arora');