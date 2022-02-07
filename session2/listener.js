const EventEmitter = require("events")

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter()

let listener1 = function listener1() {
  console.log("listener1 telah dibuat")
}

let listener2 = function listener2(){
  console.log("listener2 telah dibuat")
}

myEmitter.on("connection", listener1)

myEmitter.on("connection", listener2)

// myEmitter.emit("error", new Error("heheheheh!"))

let eventListeners = EventEmitter.listenerCount(myEmitter, "connection")

console.log(eventListeners + " Listener(s) yang berhubungan dengan key connection")

myEmitter.emit("connection")

