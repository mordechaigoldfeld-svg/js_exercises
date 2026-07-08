import http from "http"
import { json } from "stream/consumers";

const PORT = 3000;



const users = [

  { id: 1, username: "Alice" },

  { id: 2, username: "Bob" },

  { id: 3, username: "avi"}

];

const server = http.createServer((req,res)=>{
    if(req.url === "/users" && req.method === "GET"){
        res.end(JSON.stringify(users))
    }
    else if(req.url.startsWith("/users?") && req.method === "GET"){
        const qp = new URL(req.url,"http://localhost");
        const user = qp.searchParams.get("username");
        const theUser = users.find((u)=>{return u.username === user})
        if(!theUser){
            res.statusCode=404
            return res.end("not found")
        }
        res.end(JSON.stringify(theUser))
        


    }
    else if(req.url.startsWith("/users:") && req.method === "GET"){
        const param = req.url.split("/")
        if(param.length !==3){
            console.log("param error")
            res.statusCode=400
            return res.end("invalid param")
        }
        const id = param[2]
        const theUser = users.find((u)=>{return u.id === +id})
        console.log(theUser)
        if(!theUser){
            res.statusCode=404
            return res.end("not found")
        }
        res.end(JSON.stringify(theUser))
    }
    else if(req.url.startsWith("/users") && req.method === "POST"){
        console.log("step3")
        let  body = '' ;
        req.on("data",(chunk)=>{
            body += chunk.toString();
        })
        req.on("end",()=>{
            if(!req.headers["content-type"].includes("application/json")) {
                return res.end("type error")}
                const data = JSON.parse(body);
                const newData = {}
                newData["id"]=data.id
                newData["username"]=data.username
                users.push(newData);
                console.log("finish get chunks")
                console.log(users)
                res.statusCode=201
                res.end("success created")
        })
        req.on("error",(err)=>{
            console.log("step4")
            console.log(err)
        })

    }
    else{
        res.end("finish with error")
    }

})


server.listen(PORT,()=>{
    console.log("server runing...")
})
