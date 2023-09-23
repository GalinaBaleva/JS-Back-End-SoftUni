const eventBus = require('./eventBus');

eventBus.subscribe('user-add', () => {
    console.log('New user is added');
});


eventBus.subscribe('user-add', () => {
    console.log('New user is added 2');
});


eventBus.subscribe('user-removed', () => {
    console.log('User is removed!');
});

eventBus.publish('user-add');
eventBus.publish('user-removed');
