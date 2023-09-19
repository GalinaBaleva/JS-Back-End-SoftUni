const http = require('http');

const { siteStyles } = require('./content/styles/site');
const homePage = require('./views/home/home');
const { addBread } = require('./views/addBreed');
const { addCat } = require('./views/addCat');


const cats = [
    {
        id: 1,
        name: 'Navcho',
        price: '359$',
        img: 'https://ichef.bbci.co.uk/news/976/cpsprodpb/12A9B/production/_111434467_gettyimages-1143489763.jpg',
        alt: 'Black Cat',
        breed: 'Bombay Cat',
        description: 'Dominant and aggressive to other cats. Will probably eat you in your sleep. Very cute tho.',
    },
    {
        id: 2,
        name: 'Mishi',
        price: '359$',
        img: 'https://cdn.pixabay.com/photo/2015/06/19/14/20/cat-814952_1280.jpg',
        alt: 'Black Cat',
        breed: 'Angora',
        description: 'Fluffy cat',
    },
    {
        id: 3,
        name: 'Garry',
        price: '359$',
        img: 'https://cdn.pixabay.com/photo/2018/08/08/05/12/cat-3591348_1280.jpg',
        alt: 'Black Cat',
        breed: 'Persian',
        description: 'Fat cat',
    },
    {
        id: 4,
        name: 'Toshi',
        price: '359$',
        img: 'https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg',
        alt: 'Black Cat',
        breed: 'Persian',
        description: 'Fat cat',
    },
    {
        id: 5,
        name: 'Meni',
        price: '359$',
        img: 'https://cdn.pixabay.com/photo/2014/04/13/20/49/cat-323262_1280.jpg',
        alt: 'Black Cat',
        breed: 'Persian',
        description: 'Fat cat',
    },
]

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.write(homePage.home(cats));
    } if (req.url === '/content/styles/site.css') {
        res.writeHead(200, {
            'Content-Type': 'text/css'
        });
        res.write(siteStyles);
    } else if(req.url === '/cats/add-breed'){
        res.writeHead(200, {'Context-Type': 'text/html'});
        res.write(addBread);
    } else if(req.url === '/cats/add-cat'){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(addCat);
    }

    res.end();
})

server.listen(5000, () => console.log('Server is running on port 5000...'))