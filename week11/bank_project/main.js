import rl from 'readline-sync';
import { showMenu, finallValidation } from './utils.js';
import { save_get } from './costumer_manager.js';


// var user =rl.question("enter your name")
// console.log("hi",user)



function main() {
  
  let userChoice = 20
  while (userChoice !==0) {
    showMenu()
    userChoice = rl.questionInt("enter your choice")
    if (userChoice === 1) {
      const user = finallValidation()
      if (user) {
        save_get.addCustomer(user)
        console.log("succes create")
      } else {
        break
      }
      
    }else if (userChoice === 2) {
        console.log(save_get.getAll())
        
      
    }

  }
}

main()
