//const greet = require("./logger.js"); before converting
//import { sayHello/log as greeting } from "./logger.js"; for ES6
//const greeting = require("./logger.js");
//greeting.greet("Kappa!");

//const EventEmitter = require("events");

const logClass = require("./logger.js");
const logObj = new logClass.LoggerClass(); // LoggerClass needed because I exported as LoggerClass

logObj.addListener("messageLogged", (arg) => {
    console.log("message received", arg);
});
logObj.log("message");
//logObj.emit("messageLogged", {id : 1, url : "http://"});

