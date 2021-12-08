const fs = require("fs");

const loadNotes = function () {
  try {
    const dataBuffer = fs.readFileSync("./notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (error) {
    console.log("There is no file with notes, creating a new one...");
    fs.writeFileSync("./notes.json", "[]");
    return [];
  }
};

module.exports = loadNotes;
