const loadNotes = require("./load");

const readNote = function (title) {
  const note = loadNotes().find((note) => note.title === title);
  console.log('Note found: ', note);
};

module.exports = readNote;
