const loadNotes = require("./load");

const readNote = function (title) {
  const notes = loadNotes();
  return notes.find((note) => note.title === title);
};

module.exports = readNote;
