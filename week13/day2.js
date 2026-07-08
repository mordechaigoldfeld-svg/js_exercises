import { error } from "console";
import { hasSubscribers } from "diagnostics_channel";
import http, { get } from "http"





// const server = http.createServer((req,res)=>{
//     res.end("hello world")
// })


// const PORT = 3000;

// server.listen(PORT,()=>{
//     console.log("server working...")
// })

// ======================================
// task1

// function extractId(url) {

//   const parts = url.split("/");
//   return Number(parts[2])
// }

// console.log(extractId("/users/42"))
// console.log(extractId("/users/1"))
// console.log(extractId("/users"))

// =====================================

// task2
  // /users?role=admin&page=2

// function parseQuery(url) {
//   const qs = url.split("?")[1] || "";
//   const qs1 = qs.split("&")
//   const qs2 = qs1[0].split("=")
//   const qs3 = qs1[1].split("=")
//   const obj = {}
//   obj[qs2[0]]=qs2[1],obj[qs3[0]]=qs3[1]
//     return obj
  
// }

// console.log(parseQuery("users?role=admin&page=2"))

// ======================================

// task3

// import  {URL}  from "url"

// function getQueryParams(rawUrl) {

//   const parsed = new URL(rawUrl,"http://localhost");
  

//   const qs = parsed.searchParams;
  

//   return {

//     page:  qs.get("page") || "1",

//     limit: qs.get("limit") || "10",

//     sort: qs.get("sort") || ""

//   };

// }



// console.log(getQueryParams("/users?page=3&sort=name"))

// ===========================================

// task4

// const users = [

//   { id: 1, name: "Alice" },

//   { id: 2, name: "Bob" },

// ];



// function getParam(pattern){
//     const id = pattern.split(':')[1];
//     return id
    
// }


// function getById(id){
//     const user = users.find(u => u.id === +id);
//     // console.log(user)
    // if(!user){
    //     console.log(404, "{error:Not found}")
    //     return false}
    // console.log(200,user)    
    // return true
    

// }

// const id = getParam("/users/:1")
// getById(id)






// ============================


// function getParam(url, pattern) {

//   // /users/:id vs /users/42

//   const pp = pattern.split("/");

//   const up = url.split("/");

//   const key = pp.find(s => s.startsWith(":"))?.slice(1);

//   const idx = pp.findIndex(s => s.startsWith(":"));

//   return{ [key]: up[idx] }

// }



// // handler:

// const { id } = getParam("/users/21", "/users/:id");

// const user  = users.find(u => u.id === +id);

// console.log(user)

// =======================================

// task5

// ======================================




// const usersData = [

//   { id: 1, userName: "Alice" },

//   { id: 2, userName: "Bob" },

// ];


// // http//localhost/users/?username=bob
// // http://localhost:3000/posts/1

// const server = http.createServer((req,res)=>{
//     if(req.url.startsWith("/users/") && req.method === "GET"){
//         const qs = new URL(req.url,"http://localhost")
//         console.log(qs)
//         const user = qs.searchParams.get("username")
//         const theUser = usersData.find((u)=>{return u.userName === user})
//         if(!theUser){
//             res.statusCode=404
//             return res.end("not found")
//         }
//         return res.end(JSON.stringify(theUser))

//   }else if(req.url.startsWith("/posts/") && req.method === "POST"){
//     const ps = req.url.split("/")
//     const theUser = usersData.find((u)=>{return u.id === +ps[2]})
//      if(!theUser){
//             res.statusCode=404
//             return res.end("not found")
//         }
//     return res.end(JSON.stringify(theUser))
//   }
// })



// server.listen(3000,()=>{
//     console.log("server runing...")
// })

// ==========================================


// const server = http.createServer((req,res)=>{
//     if(req.url.startsWith("/user") && req.method === "POST"){
//         console.log("step1")
//         let body = '';
//         req.on("data",(chunk)=>{
//             body += chunk.toString()
//         })
//         req.on("end",()=>{
//             if(!req.headers["content-type"].includes("application/json")){ 
//                 res.end("error")}

//             const data = JSON.parse(body)
//             usersData.push(data)
//             console.log("end get all chunks");
//             console.log(body);
//             console.log(usersData)
//             res.end(body)
//         })
//         req.on("error",(err)=>{
//             console.log(err)
//             console.log("step2")
//         })
//     }else{res.end("end")}
// })


// server.listen(3000,()=>{
//     console.log("server runing...")
// })