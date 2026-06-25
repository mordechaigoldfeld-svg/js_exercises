import { save_get } from './costumer_manager.js';
import { balanceValidation, idValidation } from './utils.js';
import rl from 'readline-sync';


export function getById(id) {
  const costumer = idValidation(id)
  if (costumer !== undefined) {
    console.log(costumer)
  } else {
    console.log(`id:${id} not found`)
  }
}



export function deposit() {
  const id = rl.questionInt("enter the id")
  const costumer = idValidation(id)
  if (costumer !== undefined  && costumer.isActive !==false) {
    const amount = rl.questionInt("enter the amount")
    if (balanceValidation(amount)) {
      costumer.balance += amount
      console.log("succes deposit")
    } else {
      console.log("negative amount")
    }
  } else {
    console.log(`id:${id} not found or not active`)
  }

}




export function withdraw() {
   const id = rl.questionInt("enter the id")
  const costumer = idValidation(id)
  if (costumer !== undefined  && costumer.isActive !==false) {
    const amount = rl.questionInt("enter the amount")
    if (balanceValidation(amount) && costumer.balance>amount) {
      costumer.balance -= amount
      console.log("succes withdraw")
    } else {
      console.log("negative amount or insuficient balance")
    }
  } else {
    console.log(`id:${id} not found or not active`)
  }
}




export function deactiveCount(id) {
   const costumer = idValidation(id)
  if (costumer !== undefined) {
    costumer.isActive = false;
    console.log(`id:${id} is success dectivate`)
  } else {
    console.log(`id:${id} not found`)
  }
}
