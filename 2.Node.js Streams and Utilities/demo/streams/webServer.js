const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    const readSream = fs.createReadStream('./input.txt', { highWaterMark: 10000 });


    // readSream.on('data', (chunk) => {
    //     res.write(chunk);
    // });

    // readSream.on('end', () => {
    //     res.end();
    // });

    readSream.pipe(res);
});

server.listen(5000, () => console.log('Server is listening on port 5000...'));