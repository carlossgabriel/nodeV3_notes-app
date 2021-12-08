const loadNotes = require("./load");
const saveNotes = require("./save");

const deleteNote = function (title) {
  const notes = loadNotes();
  const noteFound = notes.find((note) => note.title === title);

  if (!noteFound) {
    console.log("There is no note with this title");
    return;
  }

  notes.splice(notes.indexOf(noteFound), 1);
  saveNotes(notes);
  console.table(notes);
};

module.exports = deleteNote;
