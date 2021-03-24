





const fs = require('fs');

// const book = {
//     title: 'Ego is the enamy',
//     author: 'Ryan Holiday'
// }
// const bookJSON = JSON.stringify(book);

// fs.writeFileSync('1-json.json', bookJSON);

const dataBuffer = fs.readFileSync('1-json.json');
const dataJSON = dataBuffer.toString();
const data = JSON.parse(dataJSON);

data.title = 'This is custom Title';

const updateJSON = JSON.stringify(data);
fs.writeFileSync('1-json.json', updateJSON);
// console.log(data.title);