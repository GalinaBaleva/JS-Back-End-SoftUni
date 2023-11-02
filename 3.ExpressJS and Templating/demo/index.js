const express = require('express');
const path = require('path');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello from express!');
    //res.status(200).send('Hello from express!'); можеш да сетнеш статус
});

app.get('/cats', (req, res) => {
    res.send('This page contains cats :')
})

app.get('/cats/:catId', (req, res) => {
    const catId = Number(req.params.catId);
    if(!catId){
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

app.get('*', (req,res) => {
    res.status(404).send('Not Found!'); 
});

app.listen(5000, () => console.log('Server is runing on port 5000...'));