const emitEvent = require('./emit')
const { EventEmitter } = require('node:events');

class MyEmitter extends EventEmitter { }

// initialize object
const myEmitter = new MyEmitter();

// add event listener
myEmitter.on('log', (msg) => {
    emitEvent(msg)
});

setTimeout(() => {
    myEmitter.emit('log', 'logged')
}, 1000)