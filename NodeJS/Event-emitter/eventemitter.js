// Import events modules
// Create an eventEmitter object
var EventEmitter=require('events')
var eventEmitter = new EventEmitter();

//create an event handler
var handler = function connected()
{
    console.log('connection successful');
}
//on is the listenter,called when event is raised
//eventEmitter.on(name of event,callback function)
eventEmitter.on('connection',handler);
eventEmitter.on('received_data',function()
{
    console.log('received the data!!');
});

//Fire the event
//Here connection and received data are two different events.
eventEmitter.emit('connection');
eventEmitter.emit('received_data');