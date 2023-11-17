const express = require('express');
const handlebars = require('express-handlebars');
const homeController = require('./controllers/homeController');

const app = express();
const port = 5000;

//Handlebars engine middlewere
app.engine('hbs', handlebars.engine({
    extname: 'hbs'
}));
app.set('view engine', 'hbs');


//Bodyparser middlewere
const bodyParser = express.urlencoded({ extended: false });
app.use(bodyParser);

//Routers
app.use(homeController);




app.listen(port, () => console.log('Server is running on port 5000...'))