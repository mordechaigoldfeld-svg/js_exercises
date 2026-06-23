// for (let i = 0; i < 10; i++){
// console.log(i)
// }



// task1:

// const age = 20;

// console.log(age >= 18 ? "adult" : "minor");

// ============================================

// task2:

// console.log(7 % 2 === 0 ? "even":"not even")

// ===========================================

// task3:


// const isLoggedIn = false;


// console.log(isLoggedIn == true ? "welcome" : "please log in")

// ========================================


// task4:


// const num = -5;

// if (num > 0) {
//   console.log("bigger then 0");
// } else if (num === 0) {
//   console.log("zero");
// } else {
//   console.log("smaller than zero");
// }

// ======================


// task5

// const a = 10;

// const b = 20;

// if (a > b) {
//   console.log(`${a} bigger than ${b}`);
// } else if (a < b) {
//   console.log(`${b} bigger than ${a}`);
// } else {
//   console.log("both are the same")
// }


// =======================


// task6

// const password = "1234";

// console.log(password==="1234"? "right password":"wrong password")


// ====================


// task7

// const x = 15;

// console.log(x>=10 && x <=20 ? "betwwen 10-20" : "not betwwen")


// ===================

// task8

// const grade = 83;

// if (grade > 90) {
//   console.log("perfect");
// } else if (grade > 75 && grade < 89) {
//   console.log("good");
// } else if (grade > 60 && grade < 74) {
//   console.log("pass");
// } else {
  // console.log("failed")
// }

// =============================


// tsk9

// const temp = 28;

// if (temp > 30) {
//   console.log("very hot, drink water!!");
// } else if (temp > 20 && temp < 30) {
//   console.log("nice");
// } else {
//   console.log("cold take a jaket")
// }


// ==================


// task10


// const age = 20;

// const hasId = true;

// if (age === 20 && hasId === true) {
//   console.log("welcome");
// } else {
//   console.log("no enter")
// }

// ================


// task11

// const isAdmin = false;
// const isManager = true;

// console.log(isAdmin || isManager ? "welcome" : "permision dennied")

// ===================

// task12

// const hasCard = false;

// console.log(hasCard === true ? "pemit" : "not permit")

// =====================


// task13

// const name = "";

// console.log(name === "" ? "guest" : `${name}`)

// ============


// task14

// const arr = [];


// console.log(arr.length <= 0 ? "empty" : "not empty")

// =================

// task15

// const x = "50";

// const y = 50;

// console.log(x==y? "same number but not same type":"not same")

// console.log(x===y? "same number and same type":"not same type")


// =======================


// task16

// const username = "admin";

// const password = "1234";

// console.log(username==="admin" && password ==="1234" ? "welcome": "permissiom dennied")


// =================



// task17

// const age = 67;


// if (age < 18) {
//   console.log("dicount young");
// } else if (age > 65) {
//   console.log("pencioner discount");
// } else {
//   console.log('no discount');
// }

// ========================







// task18

// const day = "monday"


// console.log(day==="saturday" || day==="sunday"? "weekeend":"meetweek")


// ==============


// task19

// const total = 250;

// if (total > 300) {
//   console.log("free shipping");
// } else if (total > 150 && total < 300) {
//   console.log("shipping 20$");
// } else {
//   console.log("ship 40$");
// }

// =================




// task20


// const role = 'edito';

// switch (role) {
//   case "admin":
//     console.log("all access")
//     break;
//   case "editor":
//     console.log("uppdate only")
//     break;
//   case "viewer":
//     console.log("read only")
//     break;
//   default:
//   console.log("permission dennied")
// }




// ===================================
// loops


// task1

// for (let i = 1; i < 11; i++){
//   console.log(i)
// }


// ==============

// task2

// for (let i = 10; i > 0; i--){
//   console.log(i)
// }

// =============

// task3


// const numbers = [1, 2, 3, 4, 5];
// let count = 0;

// for (let i of numbers) {
//   count+=i
// }
// console.log(count)

// ================

// task4

// const names = ["david", "michel", "aviel", "momo"]

// for (let i of names) {
//   console.log(i)
// }


// ================


// task5


// const numbers = [2, 5, 8, 11, 14, 17, 20];

// for (let i of numbers) {
//   if (i % 2 === 0) {
//     console.log(i)
//   }
// }

// ==============


// task6

// const numbers = [3, 99, 12, 45, 78];

// let max = 0;

// for (let i of numbers) {
//   if (i > max) {
//     max=i
//   }
// }
// console.log(max)


// ==============


// task7

// const word = "javascript";

// for (let i of word) {
//   console.log(i)
// }


// ?=============

// task8

// const numbers = [1, 2, 3, 4];


// for (let i of numbers) {
//   console.log(i*2)
// }


// ============

// task9


// let count = 1;
// while (count < 11){
//   console.log(count)
//   count++;
// }


// ===========


// task10

// let input = "";

// while (input !== "exit") {
//   console.log("please enter your input")
//   input = "test";
//   input = "exit";
// }

// =============================

// task111

// let input = 5;
// let total = 0;
// while (input !== 0) {
//   total += input;
//   input = 0;
// }
// console.log(total)


// =========================


// task12

// const secret = 7;

// while (secret !== 7) {
//   console.log("try again")
//   secret = 7;
// }
// console.log("nice")

// ==================

// task13

// let x = 1;

// while (x < 20) {
//   x++
//   console.log(x)
// }


// ======================

// task14

// let password = "";

// while (password !== "1234") {
//   console.log("please enter your password")
//   password = "1234"
// } console.log("right password")

// ============================

// task 15

// let count = 0;
// do {
//   console.log(count);
// }while(count !==0)

// ============================

// task16

// let choice = "";
// do {
//   console.log("enter a input")
//   choice = 2;
// }while(choice ==="")


// =================================


// task17

// const numbers = [1, 3, 7, 9, 15, 2]

// for (i of numbers) {
//   if (i > 10) {
//     console.log(i)
//     break
//   }
// }

// =================================

// task18

// const numbers = [5, -1, 8, -3, 10];

// for (i of numbers) {
//   if (i > 0) {
//     console.log(i)
//   }
// }

// ============================

// task19


