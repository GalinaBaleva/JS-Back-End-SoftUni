const express = require('express');
const handlebars = require('express-handlebars');
const path = require('path');
const app = express();

//Add handlebars to express
// app.engine('handlebars', handlebars.engine());
// app.set('view engine', 'handlebars');

//Add handlebars with hbs

app.engine('hbs', handlebars.engine({
    extname: 'hbs',
}));
app.set('view engine', 'hbs');

//Add third party middlewere

const bodyParser = express.urlencoded({ extended: false });
app.use(bodyParser);

app.use(express.static('public'));

//Add middleweres
app.use((req, res, next) => {
    console.log(`Middlewere 1`);
    next();
});

app.use((req, res, next) => {
    console.log(`HTTP Request ${req.method}: ${req.path}`);
    next();
});

//Route specific middlewere
const specificMiddlewere = (req, res, next) => {
    res.send('Some specific route with middlewere');
};

app.get('/specific', specificMiddlewere, (req, res) => {
    res.send('Some specific route with middlewere');
});


//Express router / Actions
app.get('/', (req, res) => {
    // res.send('Hello from express!');
    //res.status(200).send('Hello from express!'); можеш да сетнеш статус
    // res.render('home', {'layout': false});
    res.render('home');
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.get('/cats', (req, res) => {
    // res.send('This page contains cats :')
    res.render('cats');
});

app.post('/cats', (req, res) => {
    res.status(201).send('Cat has been created!')
})

app.get('/cats/:catId', (req, res) => {
    const catId = Number(req.params.catId);
    if (!catId) {
        return res.status(404).send('Not found!');
    };

    console.log(req.params.catId);
    res.send(`Request with parameter - ${req.params.catId}`);
});

app.get('/download', (req, res) => {
    // res.download('/Menschen B1.1 Test 1.pdf'); //добавя автоматично end()
    // res.attachment('/Menschen B1.1 Test 1.pdf'); // има нужда от ръчно поставяне на end()
    // res.end();

    res.sendFile(path.resolve(__dirname, '/Menschen B1.1 Test 1.pdf')); // този начин е по-капризет от към пътя, необходима е path библиотека

})


app.get('*', (req, res) => {
    res.status(404).send('Not Found!');
});

app.listen(5000, () => console.log('Server is runing on port 5000...'));