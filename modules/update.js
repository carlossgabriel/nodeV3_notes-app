const loadNotes = require("./load");
const saveNotes = require("./save");

const updateNote = function (title, newTitle, newBody) {
  const notes = loadNotes();
  const noteToUpdate = notes.find(function (note) {
    if (note.title !== title) {
      return false;
    }
    note.title = newTitle;
    note.body = newBody;
    return true;
  });
  notes[notes.indexOf(noteToUpdate)] = noteToUpdate;
  saveNotes(notes);
};

module.exports = updateNote;
