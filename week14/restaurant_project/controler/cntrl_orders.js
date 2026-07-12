import { bodyValidation } from "../middle/orderMidlle.js";
import { writeToJson,readData } from "../repo/data_handler.js";
import { isValidBody } from "../services/service_order.js";

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