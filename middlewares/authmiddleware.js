const jwt=require('jsonwebtoken');
const {JWT_SECRET}=require('../utils/auth');

const authMiddleware=(req,res,next)=>{
    try{
        const header=req.headers.authorization||'';
        const token=header.startsWith('Bearer ')?header.slice(7):null;
        if(!token){
            return res.status(401).send({message:'Authorization token missing'});
        }
        const decoded=jwt.verify(token,JWT_SECRET);
        req.user=decoded;
        next();
    }catch(error){
        return res.status(401).send({message:'Invalid or expired token'});
    }
};

module.exports=authMiddleware;


