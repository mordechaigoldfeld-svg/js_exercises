// task1

// function createLogger() {
//   function sayHello() {
//     console.log("hello")
//   } return sayHello
// }

// const say = createLogger()

// say()
// say()
// say()
// say()

// ==============================

// task2

// function createGreeting(name) {
//   function sayName() {
// console.log("hello",name)
//   }return sayName
// }

// const say = createGreeting("moty")

// say()


// ==============================


// task3

function createCounter() {
  let counter = 0;
  function inc() {
    return ++counter
  }return inc
}


// const count = createCounter()

// console.log(count())
// console.log(count())
// console.log(count())


// ===============================

// task4

// function outer() {

//   let x = 10;

//   return function () {

//     console.log(x);

//   };

// }

// const fn = outer();

// fn();

// ===================================

// task5

// function createMultiplier(x) {
//   function mul(y) {
//     console.log(x*y)
//   }return mul
// }

// const double = createMultiplier(2);

// double(5); // 10

// ====================================

// task6

// function createAdder(x) {
//   function addX(y) {
//     console.log(x+y)
//   }return addX
// }
// const add5 = createAdder(5);

// add5(3); // 8

// ===========================

// task7
// function createSecret() {
//   let secret = "very secret:)"
//   function getSecret() {
//     console.log(secret)
//   }
//   function setSecret(newS) {
//     secret = newS;
//   }
//   return { getSecret, setSecret }
// }


// const secret = createSecret()

// secret.getSecret()
// secret.setSecret("new test secret")
// secret.getSecret()

// ==============================
// task8

// function once(fn) {
//   function one() {
//     return fn()
//   }
//   return one
// }

// const one = once(createCounter())

// console.log(one())
// console.log(one())

// =============================
// task9
// for (var i = 0; i < 3; i++) {

//   setTimeout(function () {

//     console.log(i);

//   }, 100);

// }




// ===========================
// task10






