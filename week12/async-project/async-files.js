// from 1-3
const fs = require('fs');


// from 4-5

const fsPromises = require("fs/promises")



// task 1

// fs.readFile("./input.txt","utf-8",((err,data)=>{
//     if(err) return console.log("error",err);
//     return console.log("data:\n",data)
// }))

// /=======================================
// task2

// fs.writeFile("./output.txt","נכתב בהצלחה על ידי Node.js!","utf-8",((err)=>{
//     if (err) return console.log("error",err);
//     return console.log("success created and write ")
// }))

// ============================================
// task3

// fs.readFile("./input.txt","utf-8",((err,data)=>{
//     if(err) return console.log("error",err);
//         fs.writeFile("./output-upper.txt",data.toUpperCase(),"utf-8",((err)=>{
//               if (err) return console.log("error",err);
//               return console.log("הכל הסתיים בהצלחה!")
        
//          }))
      
// }) )  

// ==================================




// task4

// fsPromises.readFile('input.txt', 'utf8')
// .then((res)=>{
//     return console.log(" קראתי עם Promise:\n",res)
// }).catch((err)=>{
//     return console.log("error:\n",err)
// })

// ====================

// task5


// fsPromises.readFile('input.txt', 'utf8')
//   .then((res)=> {
//     return fsPromises.writeFile("./output-upper.txt",res.toUpperCase(),"utf-8")
//   })
//   .then((res2)=>{
//     return console.log("success writed")
//   })
//   .catch((err)=>{
//     return console.log("ERROR:\n",err)
//   })

// ==========================
// BONUS

// const inp =  fsPromises.readFile('input.txt', 'utf8')
// const out =  fsPromises.readFile('output.txt', 'utf8')

// Promise.all([inp,out])
// .then((results)=>{
//     return console.log(results);
// }).catch((err)=>{
//     return console.log(err)
// })
