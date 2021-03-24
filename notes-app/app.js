
const chulk = require('chalk');
const { string } = require('yargs');
const yargs = require('yargs');
const notes = require('./notes.js')
// const fs = require('fs');
// fs.writeFileSync('note.txt', 'This File Created By Node.js');
// fs.appendFileSync('note.txt', 'My Name is Arup Bose');

// const add = require('./utils.js');

// const sum = add(5,6);
// const validator = require('validator');
// const notes = require('./notes.js');

// console.log(notes());
// console.log(validator.isEmail('arup@gm.com'))


// console.log(chulk.green('Success'));
// console.log(chulk.white.bgGreen.bold('Success'));
// console.log(chulk.white.inverse.bold('Success'));

// console.log(process.argv); get defulat command line process argv values

// Customize yargs version
yargs.version('1.1.0');

// add, remove, list, read help comment add

//creating add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder:{
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string',
        },
        body:{
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv) {
        notes.addNote(argv.title, argv.body);
    } 
});

// Creating remove command
yargs.command({
    command: 'remove',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        }
    },
    describe: 'Remove a note',
    handler: function(argv){
        notes.removeNote(argv.title);
    }
});

// Creating list Command
yargs.command({
    command: 'list',
    describe: 'List out all notes',
    handler: function(){
        console.log(chulk.bold.blue('Listing out all the note'))
    }
});

//Creating read Command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler: function(){
        console.log('Find the note details')
    }
});

// yargs parse all up configerations
yargs.parse();
// console.log(yargs.argv);