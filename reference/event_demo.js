const EventEmitter = require("events")


class myEmitter extends EventEmitter { }


const emitter = new myEmitter();



emitter.on("fire!", () => {console.log("Event fired!!!")})


emitter.emit("fire!")
