const router = require('express').Router();
const cumesManager = require('../managers/cubesManager');

router.get('/', (req, res) => {
    const cubes = cumesManager.getAll();

    res.render('index', { cubes });
});

router.get('/about', (req, res) => {
    res.render('about');
});

module.exports = router;