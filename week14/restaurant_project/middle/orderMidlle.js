import { readData } from "../repo/data_handler.js"




export function bodyValidation(req,res,next){
    if(!req.body || Object.keys(req.body).length=== 0){
        res.status(400).json({"error":"Body cannot be empty"})
    }
    next()
}

const dataPath = "./data/orders.json"



export async function idValidation(req,res,next){
    try{
        const data = await readData(dataPath)
        const id = req.params.id
        const exists = data.some((order)=>{return order.id === +id})
        if(!exists){
            return res.status(404).json("id not found")
        }
        next()

    }catch(err){
        console.log(err)
    }
}