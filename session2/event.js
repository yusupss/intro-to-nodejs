const EventEmitter = require("events")

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter()

myEmitter.once("event", () => {
  console.log("halo, selamat datang")
})

// myEmitter.emit("event")
// myEmitter.emit("event")

myEmitter.on("error", err => {
  console.error("Error cuui")
})

myEmitter.emit("error", new Error("heheheheh!"))