const chalk = require("chalk");
const yargs = require("yargs");
const notes = require("./notes");

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
    notes.addNote(argv.title, argv.body);
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
    notes.removeNotes(argv.title);
  },
});

// LIST
yargs.command({
  command: "list",
  describe: "List notes",
  handler: function () {
    console.log(success("Listing notes"));
    notes.listNotes();
  },
});

// READ
yargs.command({
  command: "read",
  describe: "read",
  handler: function () {
    console.log(success("reading a note"));
  },
});

yargs.parse();
