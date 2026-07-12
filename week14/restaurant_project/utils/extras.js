import { readData } from "../repo/data_handler.js";

const dataPath = "./data/orders.json"



export async function incremenrId() {
    try{
       const data =  await readData(dataPath) 
       let max = 0
       if(data.length>=1){
        const currentId = data.sort((a,b)=>{
            return b.id - a.id 
        })
        max = currentId[0]["id"]+1
        return max
       }
       return max+1

    }catch(err){
        console.log(err)
    }
    
}

// console.log(await incremenrId())