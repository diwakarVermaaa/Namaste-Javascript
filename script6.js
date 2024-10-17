/* This lecture is about Promise APIs which are majorly used:

Promise.all()
Promise.allSettled()
Promise.race()
Promise.any()*/
//This is Episode 5 of season 2 pf Namaste Javascript//
//Video link https://youtu.be/78Homn79Qsk?feature=shared //
//Why do wee need promises in javascript and why we are learning it here?//
//In JavaScript, Promises are objects used to handle asynchronous operations. They allow us or you can say user to execute a piece of code now, and get a result later, without blocking the main execution thread.//
//Promises in JavaScript handle asynchronous tasks like network requests, file reading, or timers without blocking the main thread. They allow non-blocking execution, enabling JavaScript to continue running other code while waiting for the task to complete. Promises also avoid callback hell, making asynchronous code more readable, and provide built-in error handling through .catch().//


//So let's begin with promise.all//
// First Scenario

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('P1 Success');
  }, 3000);
});
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('P2 Success');
  }, 1000);
});
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('P3 Success');
  }, 2000);
});

Promise.all([p1, p2, p3]).then((results) => {
  console.log(results); // ['P1 Success', 'P2 Success', 'P3 Success'] -> took 3 secs
});

// Second Scenario


const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('P1 Success');
  }, 3000);
});
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('P2 Fail');
  }, 1000);
});
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('P3 Success');
  }, 2000);
});

Promise.all([p1, p2, p3])
  .then(results => console.log(results))
  .catch(err => console.error(err)); // throws error after 1 sec i.e. 'P2 Fails'

