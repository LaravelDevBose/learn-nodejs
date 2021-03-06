const fs = require('fs');
const chalk = require('chalk');

const getNotes = function(){
    return 'Get Notes...';
}

const addNote = function(title, body){
    const notes = loadNotes();
    const dupilicateNotes = notes.filter(note => note.title === title);
    if(dupilicateNotes.length == 0){
        notes.push({
            title: title,
            body: body,
        })
        saveNotes(notes);
        console.log(chalk.green.bold('New note Added!'));
    }else{
        console.log(chalk.yellow.bold('Note title already taken!'));
    }
}

const removeNote = function(title){
    const notes = loadNotes();
    const newNotes = notes.filter(note => note.title !== title);
    if(notes.length > newNotes.length){
        saveNotes(newNotes);
        console.log(chalk.green.bold('Removed the note.'))
    }else{
        console.log(chalk.red.bold('Note title not found!'));
    }
    
}

const saveNotes = function(notes){
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
}

const loadNotes = function(){
    try{
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    }catch(e){
        return [];
    }
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote
};