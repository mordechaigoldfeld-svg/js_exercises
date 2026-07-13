import express from "express"
import { getBody,getOrders,deleteOrder,update,byId } from "../controler/cntrl_orders.js"
import { bodyValidation,idValidation } from "../middle/orderMidlle.js"



const router = express.Router()


export default router

router.post('/',bodyValidation,getBody)

router.get("/",getOrders)

router.get("/:id",byId)

router.patch("/:id",idValidation,update)

router.delete("/:id",idValidation,deleteOrder)

