const loadNotes = require("./load");
const saveNotes = require("./save");
const listNotes = require("./list");

const createNote = function (title, body) {
  const notes = loadNotes();
  const duplicateNote = notes.find((note) => note.title === title);

  if (!duplicateNote) {
    notes.push({
      title: title,
      body: body,
    });

    saveNotes(notes);

    console.log("New note added");
    listNotes();
  } else {
    console.log("There is already a note with this title");
    console.log("duplicateNote:", duplicateNote);
  }
};

module.exports = createNote;
