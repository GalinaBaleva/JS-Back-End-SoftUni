const express = require('express');
const expressConfig = require('./config/expressConfig');
const homeController = require('./controllers/homeController');
const handlebarsConfig = require('./config/handlebarsConfig');

const app = express();
const port = 5000;

//Handlebars engine middlewere
handlebarsConfig(app);

expressConfig(app);
// require.apply('./config/expressConfig')(app); //It is possible to inport configs like this to.


//Routers
app.use(homeController);



app.listen(port, () => console.log('Server is running on port 5000...'))