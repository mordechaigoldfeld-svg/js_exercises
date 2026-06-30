// 1-6
// const fs = require("fs")

// 7-9
const fs = require("fs/promises")

// task1



// function writeFileAsPromise(filePath,content){
//     return new Promise((resolve,reject)=>{
//         fs.writeFile(filePath,content,"utf-8",(e,data)=>{
//             if (e) return reject(e)

//         resolve("success")        

//         })
        
//     })
// }


// const pr = writeFileAsPromise("./data/message.txt","hello world")
// pr.then((v)=>{
//     console.log(v);
// }).catch((e)=>{
//     console.log(e)
// })

// ================================

// task2


// function readFileAsPromise(filePath){
//     return new Promise((resolve,reject)=>{
//         fs.readFile(filePath,"utf-8",((err,data)=>{
//             if (err) return reject(err);
//             return resolve(data)
//         }))
//     })
// }

// const promise = readFileAsPromise("./data/message.txt")
// promise.then((v)=>{
//     console.log(v);
// }).catch((err)=>{
//     console.log("error",err)
// })    

// =====================================

// task3

// function readFileAsPromise(filePath){
//     return new Promise((resolve,reject)=>{
//         fs.readFile(filePath,"utf-8",((err,data)=>{
//             if (err) return reject(err);
//             return resolve(data.length)
//         }))
//     })
// }

// const promise = readFileAsPromise("./data/message.txt")
// promise.then((v)=>{
//     console.log(v);
// }).catch((err)=>{
//     console.log("error",err)
// })    

// ===============================

// task4

// function appendFilesByPromise(filePath,content){
//     return new Promise((resolve,reject)=>{
//         fs.writeFile(filePath,content,"utf-8",((err,data)=>{
//             if (err) return reject(err);
//         resolve(content)    
//         }))
//     })
// }


// const promise = appendFilesByPromise("./data/step1.txt","step 1 done")
// promise.then((v)=>{
//     console.log(v)
//     appendFilesByPromise("./data/step2.txt","step 2 done")
//     .then((v)=>{
//         console.log(v)
//           }).catch((err)=>{
//               console.log(err)
//     })
// })

// ==============================

// task5


// function readFileAsPromise(filePath){
//     return new Promise((resolve,reject)=>{
//         fs.readFile(filePath,"utf-8",((err,data)=>{
//             if (err) return reject(err);
//             return resolve(data)
//         }))
//     })
// }


// const promise1 = readFileAsPromise("./data/step1.txt")
// const promise2 = readFileAsPromise("./data/step2.txt")
// const promise3 = readFileAsPromise("./data/step3.txt")



// Promise.all([promise1,promise2,promise3])
// .then((val)=>{
//     console.log(val)
// }).catch((err)=>{
//     console.log(err)
// })

// =============================

// task6


// function appendFilesByPromise(filePath,content){
//     return new Promise((resolve,reject)=>{
//         fs.writeFile(filePath,content,"utf-8",((err,data)=>{
//             if (err) return reject(err);
//         resolve(content)    
//         }))
//     })
// }


// const promise = appendFilesByPromise("./data/title.txt","Daily report")
// promise.then((v1)=>{
//     appendFilesByPromise("./data/report-body.txt","Everything is working")
//     .then((v2)=>{
//         appendFilesByPromise("./data/final-report.txt",`${v1}\n${v2}`)
//         .then((v3)=>{
//             console.log(v3)
//         })
        
//           }).catch((err)=>{
//               console.log(err)
//     })
// })

// =============================================


// task7

// function readFile(filePath){
//     return fs.readFile(filePath,"utf-8")
    
// }


// const read = readFile("./data/final-report.txt")
// .then((v)=>{
//     console.log(v)
// }).catch((e)=>{
//     console.log(e)
// })

// ==================================

// task8



// const promise1 = fs.readFile("./data/step1.txt","utf-8")
// .then((v1)=>{
//     fs.readFile("./data/step2.txt","utf-8")
//     .then((v2)=>{
//         fs.readFile("./data/step3.txt","utf-8")
//         .then((v3)=>{
//             console.log([v1,v2,v3])
//         })
        
//     })

// })

// ==================================

// task9

