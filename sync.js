console.log("Synchronous code execution");

let a = 10234;
let b = 9876435;

function multiply(a, b) {
  return a * b;
}

const mul = multiply(a, b);
console.log(mul);
