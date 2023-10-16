console.log("Introducion to Objects");

// const person = {
//   firstName: "Aman",
//   lastName: "Mittal",
//   age: 23,
//   car: {
//     brand: "Toyata",
//     year: 2015,
//     color: "red",
//   },
// };

// const firstName = "Aman";
// const lastName = "Mittal";
// const age = 23;

// console.log(person);

// Accessing, Adding and Updating Properties of an Object

// const person = {
//   firstName: "Aman",
//   age: 23,
// };

// person.dog = { nameL: "Bruno", age: 13 };

// // Dot(.) Notation
// console.log(person.dog.age);
// console.log(person);
// console.log(person.firstName);

// // Square Bracket Notation

// console.log(person["firstName"]);
// console.log(person["dog"]);

// const property = "age";

// console.log(person["age"]);

// Built In Methods

// const myObj = { myMethod: () => {}, myMethod2: function () {}, myMethod3() {} };

// const dog = {
//   name: "Bruno",
//   age: 10,
//   bark: function () {
//     //this not works in arrow function
//     console.log("Woof Woof!");
//     console.log(this.name);
//     console.log(this.age);
//   },
// };

// dog["bark"]();
// dog.bark();

// console.log(dog.age);
// console.log(dog.name);

// Object.keys() => Creates an array containing the keys of an object.

const employee = {
  boss: "Payal",
  secretary: "Shubham",
  sales: "Mannu",
  accountant: "Sanyam",
};

const positionKeys = Object.keys(employee);
console.log(positionKeys);

// Object.values() => creating an array containing the values of an object

const session = {
  id: 1,
  time: "26-July-2018",
  device: "mobile",
  browser: "chrome",
};

const sessionInfo = Object.values(session);
console.log(sessionInfo);

// Object.entries() => creates a nested array of the keys/values pair of an object

const operatingSystem = {
  name: "Ubantu",
  vesion: "22.00",
  license: "Open Source",
};

const entries = Object.entries(operatingSystem);
console.log(entries);

entries.forEach((entry) => {
  const key = entry[0];
  const value = entry[1];

  console.log(`${key} : ${value}`);
});

// Object.freeze() => Prevents modification to properties and values of an object, and prevents from being added or removed from an object

const user = {
  userName: "Aman",
  passWord: "12345",
};

const admin = Object.freeze(user);
user.userName = "Papa";
user.passWord = "6789";
user.name = "Payal";
console.log(user);

// Object.seal() => prevents new properties added to an object but allows the modification of existing properties

const newUser = {
  userName: "Payal",
  passWord: "098",
};

const newAdmin = Object.seal(newUser);

newUser.userName = "kajal";
newUser.age = 23;
console.log(newAdmin);
