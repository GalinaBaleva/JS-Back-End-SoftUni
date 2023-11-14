const express = require('express');
const handlebars = require('express-handlebars');
const expressConfig = require('./config/expressConfig');



const app = express();
const port = 5000;

//Handlebars engine middlewere
app.engine('hbs', handlebars.engine({
    extname: 'hbs'
}));
app.set('view engine', 'hbs');

app.use(expressConfig);
// require.apply('./config/expressConfig')(app); It is possible to inport configs like this to.

//Bodyparser middlewere
const bodyParser = express.urlencoded({ extended: false });
app.use(bodyParser);

//Routers




app.listen(port, () => console.log('Server is running on port 5000...'))