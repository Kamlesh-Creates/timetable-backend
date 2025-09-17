const express=require('express');
const router=express.Router();
const Admin=require('../models/admin');
const authMiddleware=require('../middlewares/authmiddleware');
const {generateAuthToken}=require('../utils/auth');


router.post('/signup',async(req,res)=>{
    try {
        const data=req.body;
        const admin=new Admin(data);
        await admin.save();
        const payload={id:admin._id};
        const token=generateAuthToken(payload);
        res.status(201).send({message:"Admin registered successfully", token:token});
    } catch (error) {
        res.status(500).send({message:"Error registering admin", error:error.message});
    } 
});

router.post('/login',async(req,res)=>{

    try {
        const {email,password}=req.body;
        const admin=await Admin.findByCredentials(email,password);
        const payload={id:admin._id};
        const token=generateAuthToken(payload); 
        res.status(200).send({admin,token,message:"Admin logged in successfully"});

    }
        
    catch (error) {
        res.status(400).send({message:"Error logging in", error:error.message});
    }
})

module.exports=router;

