import { client } from "../db.js";

export async function selectAll() {
    
    const {data ,error}  = await client.from("users").select();
    if(error) return console.log(error);
    return data;
   
}




export async function selectId(id) {
    
    const {data ,error}  = await client.from("users").select().eq("id",id);
    if(error) return error;
    return data;
   
}



export async function insert(body) {
    const {username,age} = body
    const {data ,error}  = await client.from("users").insert({username:username,age:age}).select();
    if(error) return error;
    return data;
   
}




export async function deleteId(id) {
    
    const {data ,error}  = await client.from("users").delete().eq("id",id).select().single();
    if(error) return error;
    return data;
   
}




export async function updateId(id,newData) {
    const {username,age} = newData
    const {data ,error}  = await client.from("users").update({username,age}).eq("id",id).select().single();
    if(error) return error;
    return data;
   
}






// select
// const {data,error} = await client.from("users").select("id,username").eq("id",1);
// if(error) console.log(error);
// else console.log(data);



// insert
// const {data,error} = await client.from("users").insert({username:"moty"}).select();
// if(error) console.log(error);
// else console.log(data);



// update
// const {data,error} = await client.from("users").update({username:"test"}).eq("id",4).select();
// if(error) console.log(error);
// else console.log(data);



// delete
// const {data,error} = await client.from("users").delete().gte("id",5);
// if(error) console.log(error);
// else console.log(data);



// delete like
// const {data,error} = await client.from("users").delete().like("username","m%");
// if(error) console.log(error);
// else console.log(data);

