//var url = "http://mylogger.io/log";

const EventEmitter = require("events");


class Logger extends EventEmitter {
    log(message){ //functions inside a class don't needd function call, referred to as a method
        // says Hello/logs message
        console.log(message);
    
    // raise an event
    this.emit("messageLogged", {id: 1, url: "http://" });
    }
}



module.exports.LoggerClass = Logger; //before converting
//export { sayHello }; 
// exporting an object with a single method called 'msg'
// module.exports.endPoint = url; //exporting var url; can be called differently
// how to use this module in app.js
