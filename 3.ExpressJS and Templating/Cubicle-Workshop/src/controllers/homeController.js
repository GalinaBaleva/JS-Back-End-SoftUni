const router = require('express').Router();
const cumesManager = require('../managers/cubesManager');

router.get('/', (req, res) => {
    const {search, from, to} = req.query;

    const cubes = cumesManager.getAll(search, from, to);

    res.render('index', { cubes, search, from, to });
});

router.get('/about', (req, res) => {
    res.render('about');
});

router.get('/404', (req, res) => {
    res.render('404');
});

module.exports = router;