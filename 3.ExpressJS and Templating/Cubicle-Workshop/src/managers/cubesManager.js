const uniqId = require('uniqid');
const cubes = [
    {
        id: '2d5m69kglp7grs0j',
        name: 'Cubik',
        description: 'Magnets in AirSM will not drop, and their positions will be more precise with the Magnets-Snap-On design. With the use of 3mm*2mm magnets, the handfeel will be more stable and more comfortable. P.S. This design is brand new for the AirSM.',
        imageUrl: 'https://ae01.alicdn.com/kf/HTB1CSddXRxRMKJjy0Fdq6yifFXa6/Gan-356-Air-SM-3x3-Black-Magic-cube-GAN-Air-SM-Magnetic-3x3x3-Speed-cube-gans.jpg',
        difficultyLevel: '5'
    },
    {
        id: '2d5m39kglp7grs0j',
        name: 'Cubik',
        description: 'Magnets in AirSM will not drop, and their positions will be more precise with the Magnets-Snap-On design. With the use of 3mm*2mm magnets, the handfeel will be more stable and more comfortable. P.S. This design is brand new for the AirSM.',
        imageUrl: 'https://ae01.alicdn.com/kf/HTB1CSddXRxRMKJjy0Fdq6yifFXa6/Gan-356-Air-SM-3x3-Black-Magic-cube-GAN-Air-SM-Magnetic-3x3x3-Speed-cube-gans.jpg',
        difficultyLevel: '2'
    }

];

exports.getAll = (search, from, to) => {
    let result = cubes.slice();
    if(search){
        result = result.filter(x => x.name.toLowerCase().includes(search.toLowerCase()));
    };

    if(from){
        result = result.filter(x => x.difficultyLevel >= from);
    };

    if(to){
        result = result.filter(x => x.difficultyLevel <= to);
    };

    return result;
};

exports.getOne = (cubeId) => cubes.find(x => x.id === cubeId);

exports.create = (cubeData) => {
    const newCube = {
        id: uniqId(),
        ...cubeData,
    };

    cubes.push(newCube);

    return newCube;
}