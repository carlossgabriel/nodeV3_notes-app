const createNote = require("./create");
const readNote = require("./read");
const updateNote = require("./update");
const deleteNote = require("./delete");
const listNotes = require("./list");
const loadNotes = require("./load");
const saveNotes = require("./save");

module.exports = {
  createNote,
  readNote,
  updateNote,
  deleteNote,
  listNotes,
  loadNotes,
  saveNotes,
};
