import express from "express"



const app = express()




// task 1

app.get("/",(req,res)=>{
    console.log("hello world ");
    res.end("hello world")
})


// ===========================================

// task2

const users = { 1: {name:"Alice"}, 2: {name:"Bob"} };


app.get("/user/:id",(req,res)=>{
    const {id} = req.params
    if(isNaN(id)){
       return res.status(400).end("not a number")
    }
    const user = users[id];
    if(!user){
       return res.status(404).end(`id:${id} not found`)
    }
    res.status(200).json(users[id])
})

// ==============================================

// task3






// =======================================
//  taskParam1


const products = [

  { id: 1, name: 'Laptop',  price: 3000, category: 'tech' },

  { id: 2, name: 'Mouse',   price: 150,  category: 'tech' },

  { id: 3, name: 'Desk',    price: 800,  category: 'furniture' },

  { id: 4, name: 'Monitor', price: 1200, category: 'tech' },

];




app.get("/products/:id",(req,res)=>{
    const id = req.params.id;
    if(isNaN(id)){
        return res.status(400).end("not a number")
    }
    const product = products.find((prod)=>{
        return prod.id == id
    });

    if(!product){
        return res.status(404).end(`id:${id} not found`)
    }
    res.json(product)
    
})



app.get("/products",(req,res)=>{
    const {category,minPrice,maxPrice,sort} = req.query

    if(category){
        const byCategory = products.filter((prod)=>{
            return prod.category === category})
        if(byCategory.length === 0){
           return res.status(404).end("category not found")}
        res.json(byCategory)
    }
    else if(minPrice && maxPrice){
        console.log("step2")
        const prices = products.filter((prod)=>{
            return prod.price >=Number(minPrice) && prod.price <=Number(maxPrice)})
            console.log(prices.length)
            if(prices.length === 0){
                return res.status(404).end("prices not found")}
            res.json(prices) 
    }
    else if(sort){
        if(sort === "name" || sort === "category"){
            const sorted = products.map((prod)=>{
                return prod[sort]})
            return res.json(sorted.sort()) 
        }
        console.log(sort)
        const sorted = products.sort((a,b)=>{
            return a[sort] - b[sort] })
        res.json(sorted)    
    }
    else{
        res.json(products)
    }

    
})





app.listen(3000,()=>{
    console.log("server runing...")
})

