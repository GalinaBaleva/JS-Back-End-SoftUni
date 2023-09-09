const http = require('http');
const { homeTemplate, catTemplate } = require('./views/home/index');
const siteCss = require('./content/styles/site');
const addBreedHtml = require('./views/addBreed');

const cats = [
    {
        id: 1,
        name: 'Navcho',
        breed: 'Persian',
        description: 'Very cute cat',
    },
    {
        id: 2,
        name: 'Mishi',
        breed: 'Angora',
        description: 'Fluffy cat',
    },
    {
        id: 3,
        name: 'Garry',
        breed: 'Persian',
        description: 'Fat cat',
    },
]

const server = http.createServer(async (req, res) => {

    if (req.url == '/') {
        res.writeHead(200, {
            'Content-Type': 'text/html'
        });
        res.write(homeHtml);
    } else if (req.url == '/styles/site.css') {
        res.writeHead(200, { 'Content-Type': 'text/css' })
        res.write(siteCss);
    } else if (req.url == '/cats/add-breed') {
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.write(addBreedHtml);
    }
    res.end();
});

server.listen(5000, () => console.log('Server is running on port 5000...'));

