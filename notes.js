const fs = require('fs');
const chalk = require('chalk');
const { title } = require('process');

const success = chalk.bgGreen;
const error = chalk.bgRed;
const dataMsg = chalk.grey.bgWhite;

const getNotes = () => {
  // return "Your notes ...";
}

const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicateNotes = notes.filter( note => note.title === title );
  // const duplicateNotes = notes.filter(note => {
  //   return note.title === title;
  // });
  console.log('duplicateNotes', duplicateNotes);
  const duplicateNote = notes.find( note => note.title === title );
  console.log('duplicateNote', duplicateNote);

  debugger;
  if (!duplicateNote) {
    notes.push({
      title,
      body
    });
    saveNotes(notes);
    console.log(success('Note added!'));
  } else {
    console.log(error('Note already exist!'));
  }
}

const removeNote = (title) => {
  const notes = loadNotes();
  const notesToKeep = notes.filter(note => note.title !== title );
  // const notesToKeep = notes.filter(note => {
  //   return note.title !== title;
  // });
  // console.log(notesToKeep);
  if (notes.length > notesToKeep.length) {
    console.log(success('Note removed!'));
    saveNotes(notesToKeep);
  } else {
    console.log(error('No match found!'));
  }
}

const listNotes = () => {
  const notes = loadNotes();
  if( notes.length > 0) {
    console.log(success('Your notes'));
    notes.forEach(note => {
      console.log(dataMsg(`${note.title}`));
    });
  } else {
    console.log(error('There is nothing on your list!'));
  }
}

const readNotes = (title) => {
  const notes = loadNotes();
  const matched = notes.find( note => note.title === title);

  if(matched) {
    console.log(success('Matched note'));
    console.log(dataMsg(`${matched.title} - ${matched.body}`));
  } else {
    console.log(error('No match found!'));
  }
}

const loadNotes = () => {
  try {
    const bufferData = fs.readFileSync('./generated-files/notesData.json');
    const jsonData = bufferData.toString();
    const jsObj = JSON.parse(jsonData);
    return jsObj;

  } catch (e) {
    return [];
  }
}

const saveNotes = (notes) => {
  const jsonData = JSON.stringify(notes);
  fs.writeFileSync('./generated-files/notesData.json', jsonData);
}

module.exports = {
  getNotes,
  addNote,
  removeNote,
  listNotes,
  readNotes
};