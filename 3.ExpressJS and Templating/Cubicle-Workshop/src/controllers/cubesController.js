const router = require('express').Router();
const cubesMatager = require('../managers/cubesManager');

router.get('/create', (req, res) => {
    const cubes = cubesMatager.getAll();

    res.render('create');
});

router.post('/create', (req, res) => {
    const {
        name,
        description,
        imageUrl,
        difficultyLevel,
    } = req.body;

    cubesMatager.create({
        name,
        description,
        imageUrl,
        difficultyLevel: Number(difficultyLevel),
    });

    res.redirect('/');
});

module.exports = router;