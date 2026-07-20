import { client } from "./db.js";



export async function selecAll(table) {
    
    const {data ,error}  = await client.from(table).select();
    if(error) return error;
    return data;
   
}



export async function selectId(table,id) {
    
    const {data ,error}  = await client.from(table).select().eq("id",id);
    if(error) return error;
    return data;
   
}




export async function insertUser(username,age) {
    
    const {data ,error}  = await client.from("users").insert({username,age}).select();
    if(error) return error;
    return data;
   
}


export async function insertPost(title,user_id) {
    
    const {data ,error}  = await client.from("posts").insert({title,user_id}).select();
    if(error) return error;
    return data;
   
}



export async function updatePost(id,title,user_id) {
    
    const {data ,error}  = await client.from("posts").update({title,user_id}).eq("id",id).select();
    if(error) return error;
    return data;
   
}




export async function updateUser(id,username,age) {
    
    const {data ,error}  = await client.from("users").update({username,age}).eq("id",id).select();
    if(error) return error;
    return data;
   
}


export async function deleteUser(id) {
    
    const {data ,error}  = await client.from("users").delete().eq("id",id).select();
    if(error) return error;
    return data;
   
}


export async function deletePost(id) {
    
    const {data ,error}  = await client.from("posts").delete().eq("id",id).select();
    if(error) return error;
    return data;
   
}


export async function getPostUsers() {
    
      const {data,error} = await client.from("users").select("id,username,posts !inner(id,title,user_id)")
      
      if(error) return error;
      return JSON.stringify(data,null,2);
    
}