const fs = require('fs');
const { title } = require('process');

const getNotes = () => {
  return "Your notes ...";
}

const addNote = function(title, body) {
  const notes = loadNotes();
  const duplicateNote = notes.filter(note => {
    return note.title === title;
  });
  console.log(duplicateNote);

  if (duplicateNote.length === 0) {
    notes.push({
      title,
      body
    });
    saveNotes(notes);
    console.log("Note added");
  } else {
    console.log("Note already exist");
  }
}

const removeNote = (title) => {
  const notes = loadNotes();
  const notesToKeep = notes.filter(note => {
    return note.title !== title;
  });
  console.log(notesToKeep);
  saveNotes(notesToKeep);
  console.log("Note removed");
}

const loadNotes = function() {
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
  removeNote
};