import rl from "readline-sync"
import { createCustomer } from './costumer_manager.js';



function nameValidation(name) {
  if (name) {
    return true
  }
  return false
}





function balanceValidation(amount) {
  if (typeof amount !== "number") {
    return false
  } else {
    if (amount <= 0) {
      return false
    }
  }
  return true
}




function accountTypeValid(accountType) {
  const objType = ["regular", "premium", "student"]
  if (objType.includes(accountType)) {
    return true
  }
  return false
}








export function finallValidation() {

  const name = rl.question("enter your name:")
  if (nameValidation(name)) {
    const accountType = rl.question("enter your account type")
    if (accountTypeValid(accountType)) {
      const balance = rl.questionInt("enter your balance")
      if (balanceValidation(balance)) {
        return createCustomer(name,accountType,balance)
      } else {
        console.log("negative amount!!")
      }
    } else {
      console.log("invalid account type")
    }
  } else {
    console.log("invalid name")
  }

}




export function showMenu() {
  console.log("0. to exit")
  console.log("1. to create a costumer")
  console.log("2. to see all costumers")
}


// ======================================




