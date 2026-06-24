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

// function createCounter() {
//   let counter = 0;
//   function inc() {
//     return ++counter
//   }return inc
// }


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



// ==========================
// task11
// function memoize(fn) {
//   let cache = {}
//   return function (...args) {
//     const key = `${args}`;
//     if (key in cache) {
//       console.log("cache response");
//       return cache[key];
//     }
//     const result = fn(...args);
//     cache[key] = result;
//     console.log("new response")
//     return result;
//   };
// }

// const fastAdd = memoize((a, b) => a + b);

// console.log(fastAdd(1, 2));
// console.log(fastAdd(1, 2));

// ==================================
// task12
// function createStack() {
//   const obj = {}
//   function push(k, v) {
//     obj[k] = v;
//   }
//   function pop(k) {
//     delete obj[k];
//   }
//   function peek() {
//     console.log(obj);
//   }
//   return {push,pop,peek}
// }


// const menage = createStack()

// menage.push("test","moty")
// menage.push("big","ok")
// menage.peek()
// menage.pop("big")
// menage.peek()

// ==================================

// task13

// function createIdGenerator() {
//   let id = 1;
//   return function () {
//     console.log(id++);
//   }
// }

// const gen = createIdGenerator();

// gen();

// gen();

// gen();
// gen();

// ==========================
// task14

// ====================
// task15
function createBankAccount(initialBalance) {
  let balance = initialBalance;
  function getBalance() {
    console.log(`your current balance:${balance}`)
  }
  function deposit(amount){
    if (amount > 0) {
      balance += amount;
      console.log("success deposit")
    } else{
      console.log("cannot deposit negative amount")
    }
  }
  function withdraw(amount) {
    if (balance > amount) {
      balance -= amount;
      console.log("success withdraw")
    } else {
      console.log("cannot withdraw more than you have")
    }
  }return{getBalance,deposit,withdraw}
}


const moty_count=createBankAccount(100)
const avi_count =createBankAccount(50)


moty_count.getBalance()
moty_count.deposit(-2)
moty_count.deposit(2)
moty_count.withdraw(345)
moty_count.withdraw(50)
moty_count.getBalance()


avi_count.getBalance()
avi_count.deposit(2)
avi_count.withdraw(50)
avi_count.getBalance()

