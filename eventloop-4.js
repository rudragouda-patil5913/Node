const fs = require("fs");

setImmediate(()=>console.log("Set Immediate"));

setTimeout(()=>{
    console.log("SetTimeout Timer Expired");
})

Promise.resolve("Promise").then(console.log);

fs.readFile("./abc.txt","utf8",(err,data)=>{
    console.log("File Reading CB");
})

process.nextTick(()=>{
    process.nextTick(()=>console.log("2nd Tick"));
    console.log("1st Tick");
})