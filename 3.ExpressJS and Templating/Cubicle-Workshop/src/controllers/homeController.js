const router = require('express').Router();
const cumesManager = require('../managers/cubesManager');

router.get('/', (req, res) => {
    const cubes = cumesManager.getAll();

    res.render('index', { cubes });
});

router.get('/about', (req, res) => {
    res.render('about');
});

router.get('/404', (req, res) => {
    res.render('404');
});

module.exports = router;