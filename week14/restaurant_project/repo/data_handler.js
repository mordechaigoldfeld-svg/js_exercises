import {readFile, writeFile} from "fs/promises"



const dataPath = "./data/orders.json"



export async function writeToJson(filePath,content) {
    try{
       await writeFile(filePath,JSON.stringify(content,null,2),"utf-8")
        console.log("success writed")

    }catch(err){
        console.log(err)
    }    
}

export async function readData(filePath) {
    try{
       const data = await readFile(filePath,"utf-8") 
       return JSON.parse(data || '[]')

    }catch(err){
        console.log(err)
        
    }
    
}





// // await writeToJson(dataPath,{hello:"world"})
// const data = await readData(dataPath)
// console.log(data)
