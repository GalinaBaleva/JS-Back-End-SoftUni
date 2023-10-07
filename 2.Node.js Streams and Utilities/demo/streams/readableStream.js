const { log } = require('console');
const fs = require('fs');

const readSream = fs.createReadStream('./input.txt', {highWaterMark: 10000, encoding: 'utf-8'});

readSream.on('data', (chunk) => {
    log('Read Chunk');
    log(chunk);
});

readSream.on('end', () => {
    log('Reading data is finished');
});