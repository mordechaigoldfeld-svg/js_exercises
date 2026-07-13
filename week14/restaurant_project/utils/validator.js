import { readData } from "../repo/data_handler.js"



const dataPath = "./data/orders.json"


export async function validStatus(id,status){
    try{
        const data = await readData(dataPath)
        const validStatus={
            "NEW":["PREPARING","CANCELLED"],
            "PREPARING":["READY","CANCELLED"],
            "READY":["DELIVERED"]
        }
        const item = data.find((order)=>{return order.id === +id})
        if(!item){
            return [404,"not found"]
        }
        const currentStatus = item.status

        const validToChange = validStatus[currentStatus]
        if(!validToChange || !validToChange.includes(status)){
            return [400,"invalid status to change"]
        }
        return [200,"valid to change"]


    }catch(err){
        console.log(err)
        return [500,"server error"]
    }

}













