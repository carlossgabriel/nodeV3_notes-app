const loadNotes = require("./load");

const listNotes = function () {
  const notes = loadNotes();
  console.table(notes);
};

module.exports = listNotes;
