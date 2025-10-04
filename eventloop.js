const fs = require("fs");

Promise.resolve("Promise").then(console.log);

setImmediate(() => {
  console.log("Set Immediate");
});

fs.readFile("./abc.txt", "utf-8", (data) => {
  console.log("File read", data);
});

setTimeout(() => {
  console.log("Timer expired");
}, 0);
process.nextTick(() => {
  console.log("Promise nextTick");
});

fetch("https://v2.jokeapi.dev/joke/Any").then((data) => {
  data
    .json()
    .then((joke) => {
      console.log(joke.setup + " " + joke.delivery);
    })
    .catch((err) => console.log(err));
});

console.log("List line executed");
