const Admin=require('../models/admin');
const bcrypt=require('bcryptjs');
const {generateAuthToken}=require('../utils/auth');

const signup=async(req,res)=>{
    try{
        const {username,password,role}=(req.body||{});
        if(!username||!password){
            return res.status(400).send({message:'Username and password are required'});
        }
        const existing=await Admin.findOne({username});
        if(existing){
            return res.status(409).send({message:'Username already taken'});
        }
        const hashed=await bcrypt.hash(password,10);
        const admin=new Admin({username,password:hashed,role});
        await admin.save();
        const token=generateAuthToken({id:admin._id,role:admin.role});
        res.status(201).send({message:'Admin registered successfully',token});
    }catch(error){
        res.status(500).send({message:'Error registering admin',error:error.message});
    }
};

const login=async(req,res)=>{
    try{
        const {username,password}=(req.body||{});
        if(!username||!password){
            return res.status(400).send({message:'Username and password are required'});
        }
        const admin=await Admin.findOne({username});
        if(!admin){
            return res.status(401).send({message:'Invalid credentials'});
        }
        const ok=await bcrypt.compare(password,admin.password);
        if(!ok){
            return res.status(401).send({message:'Invalid credentials'});
        }
        const token=generateAuthToken({id:admin._id,role:admin.role});
        res.status(200).send({admin:{id:admin._id,username:admin.username,role:admin.role},token,message:'Admin logged in successfully'});
    }catch(error){
        res.status(400).send({message:'Error logging in',error:error.message});
    }
};

module.exports={signup,login};


