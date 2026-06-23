// task 1

// const name = (n) => `hello ${n}`

// console.log(name("moty"))


// ?===================

// task 2

// const sum = (a, b) => a + b;

// console.log(sum(2, 3))


// ========================

// task3

// function isEven(n) {
//   if (n % 2 === 0) {
//     return "is even"
//   } return "not even"
// }


// console.log(isEven(2))

// ========================


// task4

// function firstNum(arr) {
//   return arr[0]
// }

// console.log(firstNum([1,2,3,4]))


// ===================

// task5

// function uperWord(word) {
//   return word.toUpperCase()
// }

// console.log(uperWord("moty"))

// ==================================


// task6

// let x = 5;

// function test() {

//   let x = 10;

//   console.log(x);

// }

// test();

// console.log(x);


// =======================

// task7


// function test() {

//   y = 10;

// }

// test();

// console.log(y);

// =======================

// task8

// let x = 1;

// function a() {

//   console.log(x);

// }

// function b() {

//   let x = 2;

//   a();

// }

// b();


// =======================


// task9

// function test() {
//   {
//     let x = 2;
//   }
//   console.log(x)
// }

// test()


// ======================

// task10


// let count = 0;

// function add() {
//   let count = 0;
//   count++;

// }

// add()
// add()

// console.log(count)


// =================

// task11



// function sumList(arr) {
//   let count = 0;
//   for (i of arr) {
//     count += i;
//   }return count
// }

// console.log(sumList([1,2,3,4,5]))

// =============================

// task12

// const ribua = n => n ** 2

// function sumRibua(a) {
//   return a+ribua(a)
// }

// console.log(sumRibua(4))
// console.log(ribua(4))


// ======================


// task13


// let x = 10;

// function test(x) {

//   return x * 2;

// }

// console.log(test(5));


// =======================


// task14

// function evenNum(arr) {
//   let  newList = [];
//   for (i of arr) {
//     if (i % 2 === 0) {
//       newList.push(i)
//     }
//   } return newList

// }


// console.log(evenNum([1,2,3,4,5,6,7,8,9]))

// ================================

// task15

// let total = 0;

// function addToTotal(num) {

//   total += num;

// }

// function reset() {

//   total = 0;

// }

// addToTotal(5);

// addToTotal(10);

// console.log(total);

// reset();

// console.log(total);





// =============================================

// String Methods


// task1

// let word = " hello world ";

// console.log(word.trim())

// task2

// let email = "user@gmail.com";

// console.log(email.includes("@"))


// =========================

// task3

// let word = "javascript";

// console.log(word.toUpperCase())


// =========================

// task4

// let word = "HELLO WORLD";

// console.log(word.toLowerCase())


// =========================

// task5

// let word = "hello world"

// console.log(word.length)


// =========================

// task6

// let word = "JavaScript";

// console.log(word.slice(0,4))



// =========================

// task7

// let word = "JavaScript"

// console.log(word.slice(-6))

// =========================

// task8

// let word = "https://example.com";

// console.log(word.startsWith("https"))


// =========================

// task9

// let word = "mywebsite.org";

// console.log(word.endsWith(".com"))


// =========================

// task 10

// let word = 'hello world';

// console.log(word.replace("hello","hi"))


// =========================


// task 11

// let word = "banana";

// console.log(word.replaceAll("a","o"))


// console.log(word.replace(/a/gi, "o"))

// =========================

// task 12

// let word = "one two three";

// console.log(word.split(" "))


// =========================

// task 13

// let word = "apple,banana,grape";

// console.log(word.split(",",2))

// =========================

// task 14

// let word = "banana";

// console.log(word.indexOf("a"))

// =========================

// task 15


// let word = "banana";

// console.log(word.lastIndexOf("a"))



// =========================

// task 16


// let num = "7";

// console.log(num.padStart("3","0"))

// =========================

// task 17

// let word = "hi";

// console.log(word.padEnd("5","*"))

// ==============================

// task 18

// let word = "ha";

// console.log(word.repeat(3))



// ==============================

// task 19

// let word = "Hello";

// console.log(word.charAt())



// ==============================

// task 20


// let word = "Hello";

// console.log(word.at(-1))




// ==============================

// task 21

// let word = "hello";

// let word2 = "world";


// console.log(word.concat(" ", word2))


// ==============================

// task 22

// let word = "JavaScript";

// console.log(word.substring(2,6))

// ==============================

// task 23

// let word = "AdminPanel";


// console.log(word.toLocaleLowerCase().includes("admin"))

// ==============================

// task 24

// let word = " hello";

// console.log(word.trimStart())


// ==============================


// task 25



// let word = "hello ";

// console.log(word.trimEnd())




// =================================

// arrays

// task 1
// const arr = [1, 2, 3, 4];
// console.log(arr)


// =======================


// // task 2
// const fruits = ["apple", "banana", "cherry"];
// console.log(fruits[0],fruits[2])


// ================================

// task 3
// const fruits = ["apple", "banana", "cherry"];
// fruits[1] = "mango";
// console.log(fruits)

// ================================
// task 4
// const fruits = ["apple", "mango", "cherry"];
// fruits.push("orange")
// console.log(fruits)



// ================================
// task 5
// const fruits = ["apple", "mango", "cherry", "orange"];
// fruits.pop()
// console.log(fruits)

// ================================
// task 6
// const fruits = ["apple", "mango", "cherry"];
// fruits.unshift("kiwi")
// console.log(fruits)

// ================================
// task 7
// const fruits = ["kiwi","apple", "mango", "cherry"];
// fruits.shift()
// console.log(fruits)

// ================================
// // task 8
// const arr = ["a", "b", "c", "d"];
// arr.splice(1,1)
// console.log(arr)


// ================================
// task 9
// const arr = ["a","b","c","d"];
// arr.splice(1,1,"x","b")
// console.log(arr)


// ================================
// task 10
// const arr = ["a","b","c", "d"];
// arr.splice(1,1,"y")
// console.log(arr)



// ================================
// task 11
// const arr = [1, 2, 3, 4, 5]
// console.log(arr.length)
// console.log(arr[arr.length-1])


// ================================
// task 12
// const mixed = [1, 3, "e", true, "ok"]
// mixed.forEach((item) => {
//   console.log(item);
// });



// ================================
// task 13
// const nums = [10, 20, 30];
// for (i of nums) {
//   console.log(i)
// }


// ================================
// task 14
// const nums = [5, 10, 15];
// const sum = nums.reduce((acc, item) => {
//   return acc + item;
// }, 0);

// console.log(sum)



// ================================
// task 15
// const arr = [3, 8, 12, 1];
// for (i of arr) {
//   if (i > 5) {
//     console.log()
//   }
// }




// ================================

// task 16
// const obj = {name:"moty",age:28}
// console.log(obj)

// ================================
// // task 17
// const person = { name: "Dan", age: 25 };
// console.log(person.name,person["age"])


// ================================
// task 18
// const person = { name: "Dan", age: 25 };
// person.city = "tlv"
// console.log(person)


// ================================
// task 19
// const person = { name: "Dan", age: 25, city: "tlv" };
// delete person.age;
// console.log("age" in person)




// ================================
// task 20
// const student = { name: "Yael", grades: [90, 80, 100] };
// console.log(student.grades[0])
// student.grades.push(88)
// student.grades.shift()
// console.log(student.grades)



// ================================
// task 21
// const product = {

//   name: "Laptop",

//   price: 3500,

//   inStock: true

// };
// for (const key in product) {
//   console.log(key, product[key]);
// } 


// ================================
// // task 22
// const user = {

//   username: "admin",

//   role: "manager",

//   active: true

// };

// for (let key in user) {
//   console.log(key,`= ${user[key]}`)
// }
// console.log(Object.keys(user))
// console.log(Object.values(user))

// ================================
// task 23
// const order = {

//   id: 101,

//   customer: {

//     name: "Roi",

//     address: {

//       city: "Tel Aviv",

//       zip: "12345"

//     }

//   }

// };
// console.log(order.customer.address.city)
// order.customer.address.zip = "000000"
// order.customer.phone = 12345678
// delete order.customer.address.city
// console.log(order)

// ================================
