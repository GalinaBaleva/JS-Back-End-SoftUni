const fs = require('fs');
const zlib = require('zlib');

const gzip = zlib.createGzip();
const readSream = fs.createReadStream('./input.txt');
const writeStream = fs.createWriteStream('./output.txt');

readSream.pipe(gzip).pipe(writeStream);