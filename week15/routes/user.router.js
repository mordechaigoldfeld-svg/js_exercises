import express, { Router } from "express"
import { createUser, deleteById, getAllUsers, getById, update } from "../controler/users.cntrl.js"



const router = express.Router()

export default router


router.post("/",createUser)

router.get("/:id",getById)


router.get("/",getAllUsers)


router.put("/:id",update)


router.delete("/:id",deleteById)