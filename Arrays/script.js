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

// const inventory = [
//   {
//     price: 5,
//     name: "eggs",
//   },
//   {
//     price: 4,
//     name: "ham",
//   },
//   {
//     price: 3,
//     name: "mayo",
//   },
//   {
//     price: 5,
//     name: "bread",
//   },
// ];

// const prices = inventory.map((item) => item.price);
// const items = inventory.map((item) => item.name);
// console.log(prices);
// console.log(items);

// Array Filter

// const numbers = [-10, 0, -2, 15, -36, 25];

// const positiveNumbers = numbers.filter((number) => number >= 0);
// console.log(positiveNumbers);

// const employeesData = [
//   {
//     name: "Sebastian",
//     overtime: 5,
//   },
//   {
//     name: "Cardi Vee",
//     overtime: 10,
//   },
//   {
//     name: "George Lopez",
//     overtime: 12,
//   },
// ];

// const employeesToReward = employeesData.filter(
//   (employee) => employee.overtime >= 7
// );
// console.log(employeesToReward);

// const employeesName = employeesToReward.map((employee) => employee.name);
// console.log(employeesName);

// employeesName.forEach((name) => console.log(`${name} received a reward`));

// Array Find

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const value = numbers.find((number) => number > 5);
// console.log(value);

// const states = ["Meeut", "Ghaziabad", "Delhi", "Chandigarh"];
// const state = states.find((state) => state.startsWith("C"));
// console.log(state);

// Array Includes

// const array1 = [1, 2, 3];
// const pets = ["cat", "dog", "llama"];
// console.log(array1.includes(2));
// console.log(pets.includes("cat"));

// const bookShelf = ["Mobby Dick", "The Great Gatsby", "Pride and Prejudice"];

// if (bookShelf.includes("Moby Dick")) {
//   console.log("We have that book");
// } else {
//   console.log("We dont have the book");
// }

// Array Sort

// const names = ["Anne", "Carl", "Bob", "Dean"];
// names.sort();
// console.log(names);

// const numbers = [6, 7, 3, 9, 1, 15, 33, 99];
// numbers.sort((a, b) => a - b);
// console.log(numbers);
// numbers.sort((a, b) => b - a);
// console.log(numbers);

// Array Some and Every

// const array = [1, 2, 3, 4, 5];

// // const isGreaterThan3 = (number) => number > 5;

// // console.log(array.some(isGreaterThan3)); // true

// console.log(array.some((number) => number > 3));

// console.log(array.every((number) => number > 3));

// Array Reduce

const groceryList = [29, 12, 35, 45, 87, 110];

// let totalPrice = 0;
// groceryList.forEach((item) => (totalPrice += item));
// console.log(totalPrice);

const total = groceryList.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);

console.log(total);

const numbers = [1, 2, 3, 4, 5];
const totalValue = numbers.reduce((acc, val) => {
  console.log(acc, val);
  return acc + val;
}, 0);

console.log(totalValue);
