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

router.get('/details/:cubeId', (req, res) => {
    const cube = cubesMatager.getOne(req.params.cubeId);

    if(!cube){
        res.redirect('/404');
    };

    res.render('details', { cube });
});

module.exports = router;