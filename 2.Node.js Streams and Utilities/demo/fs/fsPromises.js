const fs = require('fs/promises');

fs.readFile('./input.txt', 'utf-8')
    .then(data => {
        fs.writeFile('./output.txt', data, 'utf-8');
    })
    .then(() => {
        console.log('File is saved!');
    })