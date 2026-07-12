




export function bodyValidation(req,res,next){
    if(!req.body || Object.keys(req.body).length=== 0){
        res.status(400).json({"error":"Body cannot be empty"})
    }
    next()
}