const http = require('http');
const homeHtml = require('./views/home/index');
const siteCss = require('./content/styles/site');

const server = http.createServer(async (req, res) => {
    if (req.url == '/') {
        res.writeHead(200, {
            'Content-Type': 'text/html'
        });
        res.write(homeHtml);
    } else if (req.url == '/style/')




    res.end();
});

server.listen(5000, () => console.log('Server is running on port 5000...'));

