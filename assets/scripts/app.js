// import { apiKey } from "./util.js";

// import apiKey from "./util.js";

// import { apiKey, abc as content } from "./util.js";

// import * as util from "./util.js";

// console.log(util.apiKey);

// console.log(content);

// const userMessage = "Hello World";

// console.log(userMessage);

// console.log("hello" + "world");

// function createGreeting(userName, message = "Hello!") {
//   // console.log(userName);
//   // console.log(message);
//   return "Hi, I am " + userName + ". " + message;
// }

// const greet1 = createGreeting("Max");
// console.log(greet1);

// const greet2 = createGreeting("Harish", "Hello, what's up?");
// console.log(greet2);

// Exercise
// function combine(a, b, c) {
//   return (a * b) / c;
// }

// const result = combine(11, 2, 2);
// console.log(result);

// const user = {
//   name: "Harish",
//   age: 24,
//   greet() {
//     console.log("Hello!");
//   },
// };

// console.log(user);
// user.greet();

// class User {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   greet() {
//     console.log("Hi!");
//   }
// }

// const user1 = new User("Max", 34);
// console.log(user1);
// user1.greet();

// const hobbies = ["Sports", "Cooking", "Reading"];
// console.log(hobbies[0]);

// hobbies.push("Working");
// console.log(hobbies);

// const index = hobbies.findIndex((item) => item === "Sports");

// console.log(index);

// const edittedHobbies = hobbies.map((item) => ({ text: item }));
// console.log(edittedHobbies);

// Destructuring

// const [firstName, lastName] = ["Harish", "Kumar"];

// const firstName = userNameData[0];
// const lastName = userNameData[1];

// console.log(firstName);
// console.log(lastName);

// const { name: userName, age } = {
//   name: "Harish",
//   age: 25,
// };

// console.log(userName);
// console.log(age);

// const name = user.name;
// const age = user.age;

//The Spread Operator

// const hobbies = ["Sports", "Cooking"];

// const newHobbies = ["Reading"];

// const mergedHobbies = [...hobbies, ...newHobbies];
// console.log(mergedHobbies);

// const user = {
//   name: "Harish",
//   age: 25,
// };

// const extendedUser = {
//   isAdmin: true,
//   ...user,
// };

// console.log(extendedUser);

// Control Structures

// const password = prompt("Your password");

// if (password === "Hello") {
//   console.log("Hello works");
// } else if (password === "hello") {
//   console.log("hello works");
// } else {
//   console.log("Access not granted.");
// }

// const hobbies = ["Sports", "Cooking"];

// for (const hobby of hobbies) {
//   console.log(hobby);
// }

// Functions as Values

// function handleTimeout() {
//   console.log("Timed out!");
// }

// const handleTimeout2 = () => {
//   console.log("Timed out ...again!");
// };

// setTimeout(handleTimeout, 2000);
// setTimeout(handleTimeout2, 3000);
// setTimeout(() => {
//   console.log("More timing out...");
// }, 4000);

// function greeter(greetFn) {
//   greetFn();
// }

// greeter(() => console.log("Hi"));

// Defining Functions Inside Of Functions

// function init() {
//   function greet() {
//     console.log("Hii");
//   }

//   greet();
// }

// init();

// Reference vs Primitive Values

// let userMessage = "Hello!";
// userMessage = userMessage.concat("!!!");
// console.log(userMessage);

// const hobbies = ["Sports", "Cooking"];
// hobbies.push("Working");
// console.log(hobbies);
