// const fs = require("fs");

// // const addNote = function (title, body) {
// //   const notes = loadNotes();
// //   const duplicateNote = notes.find((note) => note.title === title);
// //   // const notesFiltered = notes.filter((note) => note.title === title);

// //   if (!duplicateNote) {
// //     notes.push({
// //       title: title,
// //       body: body,
// //     });

// //     saveNotes(notes);
// //   } else {
// //     console.log("There is already a note with this title");
// //     console.log("duplicateNote:", duplicateNote);
// //     // console.log("notesFiltered", notesFiltered);
// //   }
// // };

// const saveNotes = function (notes) {
//   fs.writeFileSync("notes.json", JSON.stringify(notes));
// };

// const loadNotes = function () {
//   try {
//     const dataBuffer = fs.readFileSync("notes.json");
//     const dataJSON = dataBuffer.toString();
//     return JSON.parse(dataJSON);
//   } catch (error) {
//     console.log("There is no file with notes, creating a new one...");
//     fs.writeFileSync("notes.json", "[]");
//     return [];
//   }
// };

// // const listNotes = function () {
// //   const notes = loadNotes();
// //   console.table(notes);
// // };

// // const removeNotes = function (title) {
// //   const notes = loadNotes();
// //   const notesFound = notes.find((note) => note.title === title);

// //   if (!notesFound) {
// //     console.log("There is no note with this title");
// //     return;
// //   }

// //   notes.splice(notes.indexOf(notesFound), 1);
// //   saveNotes(notes);
// //   console.table(notes);
// // };

// module.exports = {
//   // addNote,
//   loadNotes,
//   saveNotes,
//   // listNotes,
//   // removeNotes,
// };
