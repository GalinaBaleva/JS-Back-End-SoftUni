const fs = require('fs');

const readStream = fs.createReadStream('./input.txt', { encoding: 'utf-8' });
const writeStream = fs.createWriteStream('./output.txt');


readStream.on('data', (chunk) => {
    writeStream.write(chunk);
});

readStream.on('end',() => {
    writeStream.end();
});