const fs = require('fs');
const chalk = require('chalk');
const { title } = require('process');

const success = chalk.bgGreen;
const error = chalk.bgRed;

const getNotes = () => {
  // return "Your notes ...";
}

const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicateNote = notes.filter( note => note.title === title );
  // const duplicateNote = notes.filter(note => {
  //   return note.title === title;
  // });
  console.log('duplicateNote', duplicateNote);

  if (duplicateNote.length === 0) {
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
      console.log(`${note.title} - ${note.body}`);
    });
  } else {
    console.log(error('There is nothing on your list!'));
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
  listNotes
};