const express = require('express');
const handlebars = require('express-handlebars');

const app = express();

app.engine('hbs', handlebars.engine({
    extname: 'hbs',
}));

app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.render('home');
});

const bodyParser = express.urlencoded({ extended: false });
app.use(bodyParser);

app.get('/add-breed', (req, res) => {
    res.render('addBreed');
});

app.get('/add-cat', (req, res) => {
    res.render('addCat');
});


//linking publib 
app.use(express.static('public'));





app.listen(5000, () => console.log('Server is listening on port 5000...'));




