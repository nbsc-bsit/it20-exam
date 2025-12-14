// app.js
const MyArray = require("./classes/array");
const Stack = require("./classes/stack");
const Queue = require("./classes/queue");

const arr1 = new MyArray([4, 2, 3]);
const stack1 = new Stack();

stack1.push(4);
stack1.push(2);
stack1.push(3)
stack1.traverse();