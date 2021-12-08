const fs = require("fs");

const saveNotes = function (notes) {
  fs.writeFileSync("./notes.json", JSON.stringify(notes));
};

module.exports = saveNotes;
