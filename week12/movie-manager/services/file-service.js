import { error } from "console"
import fs from "fs"
// const fs = require("fs/promises")


function readFile(){
    return new Promise((resolve,reject)=>{
    fs.readFile("./data/movies.json","utf-8",((err,data)=>{
        if (err) return reject (err);
        return resolve(data)
        }))
    })
}



const promise = readFile()
promise.then((res)=>{
    console.log(JSON.parse(res))
}).catch((rej)=>{
    console.log(rej)
})







function writeFile(content){
    return new Promise((res,rej)=>{
     fs.writeFile("./data/movies.json",JSON.stringify(content),"utf-8",(err)=>{
        if (err) return rej(err)
        res("successfuly created")
        })
    })
}

writeFile([{name:"moty"}])
.then((data)=>{
    console.log(data)
}).catch((e)=>{
    console.log(e)
})















