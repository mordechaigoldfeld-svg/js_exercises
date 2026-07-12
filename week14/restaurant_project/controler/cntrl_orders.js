import { bodyValidation } from "../middle/orderMidlle.js";
import { writeToJson,readData } from "../repo/data_handler.js";
import { removeOrder, isValidBody, search,updateStatus} from "../services/service_order.js";

const dataPath = "./data/orders.json"




export async function getBody(req,res){
    const orders = await readData(dataPath)
    const data =  await isValidBody(req.body)
    if(!data){
        return res.status(400).json("invalid body")
    }
    else{
        orders.push(data)   
        await writeToJson(dataPath,orders)
    res.status(201).json({"success created":data})}
}




export async function getOrders(req,res){
    try{
    const filters = req.query
    const response = await search(filters)
    res.status(response[0]).json(response[1])
    }catch(err){
        console.log(err)
    }
}

export async function deleteOrder(req,res){
    try{
        const id = req.params.id
        const response = await removeOrder(id)
        res.status(response[0]).json(response[1])

    }catch(err){
        console.log(err)
    }
    
}



export async function update(req,res){
    try{
        const id = req.params.id
        const status = req.query.status
        const response = await updateStatus(id,status)
        res.status(response[0]).json(response[1])
    }catch(err){
        console.log(err)
    }
}


