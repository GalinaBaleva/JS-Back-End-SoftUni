const listeners = {};

const publish = (eventName) => {
    listeners[eventName]?.forEach(x => x());  //Optional chan
};

const subscribe = (eventName, eventLIstener) => {
    if(!listeners[eventName]){
        listeners[eventName] = [];
    }

    listeners[eventName].push(eventLIstener);
};

const eventBus = {
    publish,
    subscribe,
};

module.exports = eventBus;