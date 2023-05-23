const EventEmitter = require("events")
const uuid = require("uuid")


class Emitter extends EventEmitter {

    log(msg) {
        this.emit('message', {
            id: uuid.v4(),
            message: msg
        })
    }
}



module.exports = Emitter