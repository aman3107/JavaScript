console.log("Introduction to Arrays");

// const months = ["January", "February", "March", "April"];
// console.log(typeof months);
// console.log(months[0]);
// months[2] = "Not March";
// console.log(months);
// months[4] = "June";
// console.log(months);
// console.log(months.length);

// const values = [
//   "Apple",
//   { name: "Aman" },
//   true,
//   () => {
//     console.log("Aman");
//   },
// ];

// console.log(values);

// for (let i in values) {
//   console.log(values[i]);
// }

// Array Methods

// const names = ["John", "Bob", "David", "Mark"];

// // Array Push - Adds a new element to the end of the array

// console.log(names.push("Dean"));
// console.log(names);

// // Array Pop - Deletes the last element of the array

// console.log(names.pop());
// console.log(names);

// // Array shift - Deletes the first element of an array
// names.shift();
// console.log(names);

// // Array Unshift - Adds a new element to the start of an array
// names.unshift("John");
// console.log(names);

// // Array Splice - It adds or removes from any position in the array

// names.splice(2, 0, "Jenny", "Johny");
// console.log(names);

// // Array Slice - Copies certain parts of an array into a new array
// const noOneLikesJohn = names.slice(1);
// console.log(noOneLikesJohn);

// Array forEach

// const names = ["John", "Johny", "Jenny"];

// // for (let i = 0; i < names.length; i++) {
// //   console.log(i, names[i]);
// // }

// const logTheName = (name, i) => {
//   console.log(name, i);
// };

// // names.forEach(logTheName);

// const value = names.forEach((name, i) => console.log(name, i));
// // console.log(value);

// const numbers = [1, 2, 3, 4, 5, 6];
// let sum = 0;
// numbers.forEach((number) => (sum += number));
// console.log(sum);

// Array Map

const inventory = [
  {
    price: 5,
    name: "eggs",
  },
  {
    price: 4,
    name: "ham",
  },
  {
    price: 3,
    name: "mayo",
  },
  {
    price: 5,
    name: "bread",
  },
];

const prices = inventory.map((item) => item.price);
const items = inventory.map((item) => item.name);
console.log(prices);
console.log(items);
