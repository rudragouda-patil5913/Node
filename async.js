console.log("Asynchronous code execution");

const fs = require("fs");
const https = require("https");

//All this are sent to libuv to perform asynchronous code.
https.get("https://dummyjson.com/users", (data) => {
  console.log("API got called");
});

setTimeout(() => {
  console.log("SetTime out is called after 5s");
}, 5000);

fs.readFile("./abc.txt", "utf8", (err, data) => {
  console.log("File read Asynchronous from abc.txt", data);
});

//Here code is sent to libuv but it works in synchronous way.
const data = fs.readFileSync("./random.txt", "utf8");
console.log("File read in Synchronous format from random.txt", data);
