const fs = require('fs');


const readSream = fs.createReadStream('./input.txt');
const writeStream = fs.createWriteStream('./output.txt');

readSream.pipe(writeStream);