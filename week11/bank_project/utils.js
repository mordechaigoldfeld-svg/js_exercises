import rl from "readline-sync"
import { createCustomer } from './costumer_manager.js';
import { save_get } from './costumer_manager.js';


function nameValidation(name) {
  if (name) {
    return true
  }
  return false
}





export function balanceValidation(amount) {
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
        return createCustomer(name, accountType, balance)
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
  console.log("3. to see by id")
  console.log("4. to deposit")
  console.log("5. to withdraw")
  console.log("6. to dectivate/close account")
  console.log("7. to statistics")
}


// ======================================





export function idValidation(id) {
  const obj = save_get.getAll()
  const test = obj.find((val) => {
    return val.id === id
  })
  return test

}


// =============================



export function statistics() {
  const obj = save_get.getAll()
  const totalCostumers = obj.length
  const activeAccounts = obj.filter((val) => {
    return val.isActive
  })
  const totalMoney = obj.reduce((total, val) => {
    return total + val.balance
  }, 0)
  const averageBalance = totalMoney / obj.length
  const highestBalanceList = obj.sort((a, b) => b.balance - a.balance)
  const highestBalance = highestBalanceList[0]
  console.log("========== Statistics ==============")
  console.log("total costumers:", totalCostumers)
  console.log("active accounts", activeAccounts.length)
  console.log("total money", totalMoney)
  console.log("average balance", averageBalance)
  console.log("highest balance",highestBalance.balance)

}
