import rl from 'readline-sync';
import { showMenu, finallValidation,statistics } from './utils.js';
import { save_get } from './costumer_manager.js';
import { getById } from './account_manager.js';
import { deposit,withdraw,deactiveCount } from './account_manager.js';



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
    else if (userChoice === 3) {
      const enterId = rl.questionInt("enter the id")
      getById(enterId)
    }
    else if (userChoice === 4) {
      deposit()
    }
    else if (userChoice === 5) {
      withdraw()
    }
    else if (userChoice === 6) {
      const enterId = rl.questionInt("enter the id")
      deactiveCount(enterId)
    }
    else if (userChoice === 7) {
      statistics()
    
    }

  }
}

main()
