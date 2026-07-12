import { incremenrId } from "../utils/extras.js"




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

