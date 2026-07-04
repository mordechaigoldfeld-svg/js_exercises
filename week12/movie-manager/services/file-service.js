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









export function writeFile(content){
    return new Promise((res,rej)=>{
     fs.writeFile("./data/movies.json",JSON.stringify(content,null,2),"utf-8",(err)=>{
        if (err) return rej(err)
        res("successfuly created")
        })
    })
}













