const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

// eventEmitter.on('start', () => {
//   console.log('started');
// });

// eventEmitter.emit('start');

// eventEmitter.on('start', (number) => {
//   console.log(`started ${number}`);
// });

// eventEmitter.emit('start', 23);

eventEmitter.on('start', (start, end) => {
  console.log(`started from ${start} to ${end}`);
});

eventEmitter.emit('start', 1, 100);

///**************************///

const door = new EventEmitter();

door.emit('slam'); // emitting the event "slam"

door.eventNames();

door.getMaxListeners();

door.listenerCount('open');

door.listeners('open');

door.on('open', () => {
  console.log('Door was opened');
});

door.removeAllListeners('open');

const doSomething = () => {};
door.on('open', doSomething);
door.removeListener('open', doSomething);

door.setMaxListeners(50);

const ee = new EventEmitter();

ee.once('my-event', () => {
  //call callback function once
});
