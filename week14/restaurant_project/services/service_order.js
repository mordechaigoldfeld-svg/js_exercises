import { readData, writeToJson } from "../repo/data_handler.js"
import { incremenrId } from "../utils/extras.js"
import { validStatus } from "../utils/validator.js"

const dataPath = "./data/orders.json"


export async function isValidBody(body){
    if(body.customer && body.table)
        return {
        id:await incremenrId(),
        customer:body.customer,
        status:"NEW",
        table:body.table
    }  
    return false  
}



export async function search(filters) {
    const orders = await readData(dataPath)
    const{status,customer,table} = filters
    let filteredList = [...orders]
    if(status){
        filteredList = filteredList.filter((order)=>{return order.status === status})
    }
    if(customer){
        filteredList = filteredList.filter((order)=>{return order.customer.includes(customer)})
    }
    if(table){
        filteredList = filteredList.filter((order)=>{return order.table === +table})
    }
    if(filteredList.length === 0){
        return[404,"not found"]
    }
    return [200,filteredList]
        
}



export async function removeOrder(id){
    const orders =  await readData(dataPath)
    const newData = orders.filter((order)=>{return order.id !== +id})
    await writeToJson(dataPath,newData)
    return [201,"succses deleted and updated"]
}



export async function updateStatus(id,status) {
    try{
        const valid = await validStatus(id,status)
        if(valid[0] !== 200){
            return [valid[0],valid[1]]
        }
        const orders =  await readData(dataPath)
        const current = orders.find((order)=>{return order.id === +id})
        current.status = status
        await writeToJson(dataPath,orders)
        return [201,"succes updated"]

    }catch(err){
        console.log(err)
    }
}