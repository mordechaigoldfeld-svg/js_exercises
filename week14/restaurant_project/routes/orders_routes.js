import express from "express"
import { getBody } from "../controler/cntrl_orders.js"
import { bodyValidation } from "../middle/orderMidlle.js"



const router = express.Router()


export default router

router.post('/',bodyValidation,getBody)