const fs = require("fs");

setImmediate(() => console.log("Set Immediate"));

Promise.resolve("Promise").then(console.log);

setTimeout(() => console.log("Timer Expired"), 0);

fs.readFile("./abc.txt", "utf8", (err, data) => {
  setImmediate(() => console.log("2nd setImmediate"));

  setTimeout(() => console.log("Set Timeout"), 0);

  process.nextTick(() => console.log("2nd process.nextTick"));
  console.log("File reading CB");
});

process.nextTick(() => console.log("process.nextTick"));

console.log("Last line of code");
