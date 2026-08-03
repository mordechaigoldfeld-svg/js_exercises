import express from "express"

const app = express()

app.use(express.urlencoded())

const data = []


app.post("/register",(req,res)=>{
    data.push(req.body)
    console.log(data);
    
    res.status(201).json({succes:"created"})
})





app.listen(8080,()=>{
    console.log("server runing...")
})