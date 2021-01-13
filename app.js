const fs = require('fs');

fs.writeFileSync('./generated-files/notes.txt', 'This file is created by node fs!');


// fs.writeFileSync('notes.txt', 'Created by- Nidhi Arora'); Overwites the first line

// to append use appendFileSync method

fs.appendFileSync('./generated-files/notes.txt', ' Created by- Nidhi Arora');