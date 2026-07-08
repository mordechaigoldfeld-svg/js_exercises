import http from "http"
import fs from "fs/promises"
// const http = require('http')


const PORT = 3000;

// const server = http.createServer((req,res)=>{
//     res.writeHead(200,{"content-type":"appliction/json"});
//     res.end(JSON.stringify({"hello": "world"}));
// })


// server.listen(PORT,()=>{
//     console.log(`port 3000 runing, http://localhost:${PORT}`);
// });




// import http from 'http';

// const server = http.createServer((req, res) => {

// res.end('Hello World');

// });

// server.listen(3000, () => {

// console.log('Server running on port 3000');

// });

// ===================================
// task1

// const firstServer = http.createServer((req,res)=>{
//     res.end("hello from my server")
// })


// firstServer.listen(PORT,()=>{
//     console.log("server work")
// })


// ================================

// task2



// const server = http.createServer((req,res)=>{
//     res.setHeader('Content-Type', 'text/plain');

//     if(req.url === "/" && req.method === 'GET'){
//         res.end("home page")
//         return;
//     }else if(req.url === "/about" && req.method === "GET"){
//         res.end("about page")
//         return;2   

//     }else if(req.url === "/contact" && req.method === "GET"){
//         console.log(res.url);
        
//         res.end("contact")
//         return;

//     }else{
//         res.statusCode=404
//         res.end("page not found")
//     }
// })



// server.listen(PORT,()=>{
//     console.log(`sever start run, http://localhost:${PORT}`)
// })

// ===============================

// task3

// const server = http.createServer((req,res)=>{
//     if(req.url === '/users' && req.method === "GET"){
//         res.end("users list")
//     }else if(req.url === "/users" && req.method === "POST"){
//         res.statusCode = 201
//         res.end("user created")
//     }else{
//         res.statusCode =404;
//         res.end("not found")
//     }

// })


// server.listen(PORT,()=>{
//     console.log("server start")
// })
// ========================================


async function readfile() {
    try{
        const data = await fs.readFile("./users.json","utf-8");
        console.log("loading data...")
        return JSON.parse(data)

    }catch(err){
        console.log(err)
    }
    
    
}


// const none = await readfile()






async function writefile(content){
    try{
        console.log("content",content)
        const currentData = await readfile();
        const parse = JSON.stringify(currentData)
        console.log("parse",parse)
        const newData = currentData.push(content);
        console.log("newData",newData)
        fs.writeFile("./users.json",JSON.stringify(newData,null,2),"utf-8")
        console.log("success updated")
        

    }catch(err){
        console.log(err)
    }
    
}


writefile({name:"moty"})

const data = await readfile()

// console.log(data)


// const server = http.createServer((req,res)=>{
//     if(req.url === "/users" && req.method === "GET"){
//         console.log(data)
//         res.end(data)
//     }
//     else if(req.url.startsWith("/users") && req.method === "POST"){
//         let body = "";
//         req.on("data",(chunk)=>{
//             body += chunk.toString()
//         })
//         req.on("end",()=>{
//             if(!req.headers["content-type"].includes("application/json")) return res.end("invalid body type")
//             const parsData = JSON.parse(body);
//             const obj = {}
//             obj["id"]=parsData.id;
//             obj["username"]=parsData.username;
//             writefile(obj);
//             console.log("finish get chunks")
//             console.log(obj)
//             res.statusCode=201
//             res.end("success created")    
//         })
//         req.on("error",(err)=>{
//             console.log(err)
//         })

//     }else{
//         console.log("finish")
//         res.end("end")
//     }

// })



// server.listen(PORT,()=>{
//     console.log("server runing...")
// })