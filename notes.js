const fs = require('fs');

const getNotes = () => {
  return "Your notes ...";
}

const addNotes = function(title, body) {
  const notes = loadNotes();
  notes.push({
    title,
    body
  });
  saveNotes(notes);
}

const removeNote = () => {
  // remove note
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
  addNotes,
};