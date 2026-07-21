import "dotenv/config"
import { MongoClient } from "mongodb"
import express from "express"

const MONGO_URI = process.env.MONGO_URI

const app = express()

const PORT  = process.env.PORT

const connection = new MongoClient(MONGO_URI)
console.log('this is my MONGO URI :',MONGO_URI);


try{
    await connection.connect()
    console.log("connected...");
    

}catch(err){
    console.log(err)
}




const db = connection.db("score_tracker");


const players = db.collection("players");

app.use(express.json())


app.listen(PORT,()=>{
    console.log(`server running... on port:${PORT}`)
})