import { deleteId, insert, selectAll, selectId, updateId } from "../dal/users.dal.js";

//  createUser, deleteById, getAllUsers, getById, update



export async function createUser(req,res) {
    try{
        const body = req.body
        const create = await insert(body)
        res.status(201).json(create)

    }catch(err){
        console.log(err)
    }
}




export async function getAllUsers(req,res) {
    try{
        const users = await selectAll()
        res.status(200).json(users)
    }catch(err){
        console.log(err)
    }
    
}




export async function getById(req,res) {
    try{
        const {id} = req.params
        const user = await selectId(id)
        res.status(200).json(user)
    }catch(err){
        console.log(err)
    }
    
}


export async function deleteById(req,res) {
    try{
        const {id} = req.params
        const user = await deleteId(id)
        res.status(200).json(user)
    }catch(err){
        console.log(err)
    }
    
}




export async function update(req,res) {
    try{
        const {id} = req.params
        const body = req.body
        const create = await updateId(id,body)
        res.status(201).json(create)

    }catch(err){
        console.log(err)
    }
}
