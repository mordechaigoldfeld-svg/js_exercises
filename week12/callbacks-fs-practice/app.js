const fs = require("fs")


// // task1

// fs.writeFile("./data/message.txt","Hello from Node fs!","utf-8",(e)=>{
//     if (e) return console.log(e);
//     fs.readFile("./data/message.txt","utf-8",(e,data)=>{
//     if (e) return console.log(e);
//     console.log("data:",data)})    
// })

// ============================

// // task2


// fs.readFile("./data/message.txt","utf-8",(e,data)=>{
//     if(e) return console.log(e);
//     console.log(data)

// })

// =========================

// task3

// console.log('start')
// fs.readFile("./data/message.txt","utf-8",(e,data)=>{
//     if(e) return console.log(e);
//     console.log(data)
// })
// console.log("end")

// ========================

// task4

// console.log('start')
// fs.readFile("./data/not-exist.txt","utf-8",(e,data)=>{
//     if(e) return console.log(e);
//     console.log(data)
// })

// =========================

// task5

// function readTextFile(filePath,callback){
//     fs.readFile(filePath,"utf-8",(e,data)=>{
//         if (e) return console.log("error:",e);
//         console.log(null,data)
//     })
// }

// readTextFile("./data/message.txt",(e,data)=>{
//     if(e) return console.log(e);
//     console.log(data)
// })

// ===============================

// task6

// fs.appendFile("./data/message.txt","\nThis line was added later.","utf-8",(e)=>{
//     if(e) return console.log(e);
//     fs.readFile("./data/message.txt","utf-8",(e,data)=>{
//     if(e) return console.log(e);
//     console.log(data)
//     })
// })
// =================================

// task7

// fs.writeFile("./data/log.txt","log started\n","utf-8",(e)=>{
//     if(e)  return console.log(e);
//     fs.appendFile("./data/log.txt","first action completed\nsecond action completed","utf-8",(e)=>{
//         if(e) return console.log("e");
//         fs.readFile("./data/log.txt","utf-8",(e,data)=>{
//             if(e) return console.log(e);
//             console.log(data)
//         })
//     })
// })

// ================================

// task8

// fs.mkdir("data/users",(e)=>{
//     if (e) return console.log("alrredy exists");
//     console.log("Users folder created")

// })

// =========================

// // task9

// fs.writeFile("data/users/users.txt","Name: David\nAge:25","utf-8",(e)=>{
//     if(e) return console.log("not exists",e);
//     console.log("success created")
// })

// =========================

// tasks10

// fs.readdir("data",{recursive:true},(e,data)=>{
//     if(e) return console.log(e);
//     console.log(data)

// })

// ===========================

// task11


// not order
// function createFile(filePath,dataFile,message){
//     fs.writeFile(filePath,dataFile,"utf-8",(e)=>{
//         if(e)return console.log(e);
//         console.log(message)
//     })
// }


// createFile("./data/step1.txt","Step 1 completed","Step 1 completed")
// createFile("./data/step2.txt","Step 2 completed","Step 2 completed")
// createFile("./data/step3.txt","Step 3 completed","All steps completed")


// updated
// fs.writeFile("./data/step1.txt","Step 1 completed","utf-8",(e)=>{
//     if(e)return console.log(e);
//     console.log("Step 1 completed")
//         fs.writeFile("./data/step2.txt","Step 2 completed","utf-8",(e)=>{
//         if(e)return console.log(e);
//         console.log("Step 2 completed")
//             fs.writeFile("./data/step3.txt","Step 3 completed","utf-8",(e)=>{
//             if(e)return console.log(e);
//             console.log("All steps completed")
//             })
//         })
//     })




// ================
// =================

// task12

// fs.readFile("./data/step1.txt","utf-8",(e,data)=>{
//     if(e) return console.log(e);
//     fs.readFile("./data/step2.txt","utf-8",(e,data1)=>{
//     if(e) return console.log(e);
//     fs.readFile("./data/step3.txt","utf-8",(e,data2)=>{
//     if(e) return console.log(e);
//     console.log(data,data1,data2)

//         })

//     })
// })

// ===============================

// task13

// fs.writeFile("./data/report-title.txt","Daily Report","utf-8",(e)=>{
//     if(e) return console.log(e);
//     fs.writeFile("./data/report-body.txt","Everything is working","utf-8",(e)=>{
//         if(e) return console.log(e);
//         fs.readFile("./data/report-title.txt","utf-8",(e,dataReport)=>{
//             if(e) return console.log(e);
//             fs.readFile("./data/report-body.txt","utf-8",(e,dataBody)=>{
//                 if(e) return console.log(e);
//                 fs.writeFile("./data/final-report.txt",`${dataReport}\n${dataBody}`,"utf-8",(e)=>{
//                     if(e)return console.log(e);
//                     fs.readFile("./data/final-report.txt","utf-8",(e,data)=>{
//                         if(e) return console.log(e);
//                         console.log(data)
//                     })
//                 })
//             })
//         })    
//     })
// })
// ===============================

// task14

// fs.writeFile("./data/original.txt","Original file content","utf-8",(e)=>{
//     if(e) return console.log(e);
//     fs.readFile("./data/original.txt","utf-8",(e,data)=>{
//         if(e) return console.log(e);
//         fs.writeFile("./data/copy.txt",data,"utf-8",(e)=>{
//             if(e) return console.log(e);
//             fs.readFile("./data/copy.txt","utf-8",(e,data1)=>{
//                 if(e) return console.log(e);
//                 console.log(data1)
//             })
            
//         })
//     })
// })