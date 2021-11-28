const chalk = require("chalk");
const yargs = require('yargs')
const getNotes = require("./notes");

const success = chalk.green.inverse.bold;
const erro = chalk.white.underline.bgRed;

// Customizing yargs version
yargs.version('1.0.1')

// ADD
yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder: {
    title: {
      describe: 'Note title',
      type: 'string',
      demandOption: true
    },
    body: {
      describe: 'Note body',
      type: 'string',
      demandOption: true
    },
  },
  handler: function (argv) {
    console.log(success(argv.title));
    console.log(argv.body);
  }
})

// REMOVE
yargs.command({
  command: 'remove',
  describe: 'remove a note',
  handler: function () {
    console.log('removing a new note');
  }
})

// LIST
yargs.command({
  command: 'List',
  describe: 'List notes',
  handler: function () {
    console.log('Listing notes');
  }
})

// READ
yargs.command({
  command: 'read',
  describe: 'read',
  handler: function () {
    console.log('reading a note');
  }
})

yargs.parse()