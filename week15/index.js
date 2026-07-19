import express from "express"
import usersRouter from "./routes/user.router.js"


const PORT = process.env.PORT


const app = express()



app.use(express.json())


app.use("/users",usersRouter)

// app.get("/users",(req,res)=>{
//     res.end("test")
// })

app.listen(PORT,()=>{
    console.log(`server runing on port ${PORT}...`)
})




