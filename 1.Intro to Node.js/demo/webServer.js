const http = require('http');

const server = http.createServer((req, res) => {
    console.log('Server is called!');
    res.write('Hello from NodeJS Server! Updated version!');
    res.end();
});

server.listen(5000);
console.log('Server is running on port 5000...');

