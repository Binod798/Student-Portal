const jwt = require("jsonwebtoken")
async function apply_route_middleware (req,res,next){
   const token = req.headers['authorization']?.split(' ')[1];
    if(!token){
        return res.status(401).json("Token not provided")
    }
    try{
        const decoded = jwt.verify(token,"myapp@123")
        req.user= decoded
        next()

    }catch(err){
        res.status(401).json({message:err.message})

    }

}
module.exports = apply_route_middleware