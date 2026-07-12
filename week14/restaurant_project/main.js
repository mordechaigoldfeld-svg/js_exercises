import express from "express"
import orderRoutes from "./routes/orders_routes.js"

const app = express()


app.use(express.json())

app.get("/",(req,res)=>{
    res.end("test")
})


app.use("/orders",orderRoutes)

app.listen(3000,()=>{
    console.log("server runing...")
})