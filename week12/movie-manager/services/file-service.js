import { error } from "console"
import fs from "fs"
// const fs = require("fs/promises")


export function readFile(){
    return new Promise((resolve,reject)=>{
    fs.readFile("./data/movies.json","utf-8",((err,data)=>{
        if (err) return reject (err);
        return resolve(JSON.parse(data))
        }))
    })
}



// const promise = readFile()
// promise.then((res)=>{
//     console.log(res)
// }).catch((rej)=>{
//     console.log(rej)
// })







export function writeFile(content){
    return new Promise((res,rej)=>{
     fs.writeFile("./data/movies.json",JSON.stringify(content,null,2),"utf-8",(err)=>{
        if (err) return rej(err)
        res("successfuly created")
        })
    })
}


// const example =[ 
// { 
// "id": 1, 
// "title": "Inception", 
// "genre": "Sci-Fi", 
// "year": 2010, 
// "rating": 8.8 
// } 
// ] 


// writeFile(example)
// .then((data)=>{
//     console.log(data)
// }).catch((e)=>{
//     console.log(e)
// })















