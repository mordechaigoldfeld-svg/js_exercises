import { finallValidation } from './utils.js';




function createId() {
  let id = 1;
  function increment() {
    return id++;
  }
  return increment
}
const inc = createId()




export function createCustomer(name, accountType, balance) {
  const newCustomer = {
    id: inc(),
    fullName: name,
    accountType: accountType,
    balance: balance,
    isActive: true
  }
  return newCustomer
}


export function saveCustomerAndGetAll() {
  let customers = []
  function addCustomer(customer) {
    customers.push(customer)
  }
  function getAll() {
    return customers
  }
  return { addCustomer, getAll }
}

export  const save_get = saveCustomerAndGetAll()


// const test = createCustomer("moty", "test", 120)
// const test2 = createCustomer("test", "test", 10)
// const save_get = saveCustomerAndGetAll()

// save_get.addCustomer(test)
// save_get.addCustomer(test2)

// const all = save_get.getAll()
// console.log(all[0])





