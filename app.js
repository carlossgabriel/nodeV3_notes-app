const chalk = require("chalk");
const yargs = require("yargs");
const createNote = require("./modules/create");
const readNote = require("./modules/read");
const deleteNote = require("./modules/delete");
const updateNote = require("./modules/update");
const listNotes = require("./modules/list");

const success = chalk.green.inverse.bold;
const erro = chalk.white.underline.bgRed;

// Customizing yargs version
yargs.version("1.0.1");

// ADD
yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Note title",
      type: "string",
      demandOption: true,
    },
    body: {
      describe: "Note body",
      type: "string",
      demandOption: true,
    },
  },
  handler: function (argv) {
    createNote(argv.title, argv.body);
  },
});

// REMOVE
yargs.command({
  command: "remove",
  describe: "remove a note",
  builder: {
    title: {
      describe: "Note title",
      type: "string",
      demandOption: true,
    },
  },
  handler: function (argv) {
    console.log(success("Note removed"));
    deleteNote(argv.title);
  },
});

// LIST
yargs.command({
  command: "list",
  describe: "List notes",
  handler: function () {
    console.log(success("Listing notes"));
    listNotes();
  },
});

// READ
yargs.command({
  command: "read",
  describe: "read",
  handler: function (argv) {
    readNote(argv.title);
  },
});

// UPDATE
yargs.command({
  command: "update",
  describe: "update",
  builder: {
    title: {
      describe: "existing note title",
      type: "string",
      demandOption: true,
    },
    newTitle: {
      describe: "New Note title",
      type: "string",
      demandOption: true,
    },
    body: {
      describe: "Note body",
      type: "string",
      demandOption: true,
    },
  },
  handler: function (argv) {
    updateNote(argv.title, argv.newTitle, argv.body);
  },
});

yargs.parse();
