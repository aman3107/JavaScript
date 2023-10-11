console.log("Introduction to Tricks");
console.log("Hello My Name is Aman, Hi");

// Global Scope

// let name = "John";

// const logName = () => {
//   // name = "Aman";
//   console.log(name);
// };

// const logName2 = () => {
//   console.log(name);
// };
// logName();
// logName2();

// Local Scope/ Function Scope

// const someFunction = () => {
//   const name1 = "Aman";
//   console.log(name1);

//   const anotherFunction = () => {
//     console.log( );
//   };
//   anotherFunction();
// };
// // console.log(name1);
// someFunction();

// Hoisting

// age = 20;
// console.log(age);
// var age;

// hoist();

// function hoist() {
//   message = "test";
//   console.log(message);
//   var message = "test";
// }
// hoist();

// Closures

// const outer = () => {
//   const outerVar = "Hello!";
//   const inner = () => {
//     const innerVar = "Hi!";
//     console.log(outerVar, innerVar);
//   };
//   console.log(outerVar);
//   return inner;
// };

// // inner();
// // outer();
// const innerFn = outer();
// innerFn();

const init = () => {
  const hobby = "Learning JavaScript";

  const displayHobby = () => {
    console.log(hobby);
  };
  return displayHobby;
  // displayHobby();
};

// init();

const dHobby = init();
dHobby();
