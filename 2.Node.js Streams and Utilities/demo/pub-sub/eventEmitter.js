const EventEmmiter = require('events');

const eventEmmiter = new EventEmmiter();

eventEmmiter.on('user-added', () => {
    console.log('New user is added');
});


const unsubscribe = eventEmmiter.on('user-added', (username, age) => {
    console.log(`New user is added 2: ${username} ${age} old`);
});


eventEmmiter.on('user-removed', () => {
    console.log('User is removed!');
});

eventEmmiter.emit('user-added', 'Pesho', 20);
eventEmmiter.emit('user-removed');

eventEmmiter.emit('user-added', 'Pesho', 20);