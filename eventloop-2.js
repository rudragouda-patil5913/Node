const a = 100;
const fs = require("fs");

setImmediate(() => console.log("Set Immediate"));

Promise.resolve("Promise").then(console.log);

setTimeout(() => console.log("Timer Expired"), 0);

fs.readFile("./abc.txt", "utf8", (err, data) => {
  console.log("File reading CB");
});

process.nextTick(() => console.log("process.nextTick"));

function printA() {
  console.log(`Value of a : ${a}`);
}

printA();

console.log("Last line of code");

