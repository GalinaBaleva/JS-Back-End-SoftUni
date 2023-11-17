const express = require('express');
const handlebars = require('express-handlebars');
const path = require('path');
const expressConfig = require('./config/expressConfig');
const homeController = require('./controllers/homeController');

const app = express();
const port = 5000;

//Handlebars engine middlewere
app.engine('hbs', handlebars.engine({
    extname: 'hbs',
}));
app.set('view engine', 'hbs');
app.set('views', 'src/views')

expressConfig(app);
// require.apply('./config/expressConfig')(app); //It is possible to inport configs like this to.


//Routers
app.use(homeController);



app.listen(port, () => console.log('Server is running on port 5000...'))