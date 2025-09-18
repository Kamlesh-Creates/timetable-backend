const Admin=require('../models/admin');
const {generateAuthToken}=require('../utils/auth');

const signup=async(req,res)=>{
    try{
        const {username:usernameRaw,password:passwordRaw,role:roleRaw}=(req.body||{});
        const username=typeof usernameRaw==='string'?usernameRaw.trim():usernameRaw;
        const incomingPassword=typeof passwordRaw==='string'?passwordRaw.trim():passwordRaw;
        const password=incomingPassword;
        const role=typeof roleRaw==='string'?roleRaw.trim():roleRaw;
        if(!username||!password){
            return res.status(400).send({message:'Username and password are required'});
        }
        const existing=await Admin.findOne({username});
        if(existing){
            return res.status(409).send({message:'Username already taken'});
        }
        const admin=new Admin({username,password,role});
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
        if(admin.password!==password){
            return res.status(401).send({message:'Invalid credentials'});
        }
		const token=generateAuthToken({id:admin._id,role:admin.role});
		res.status(200).send({admin:{id:admin._id,username:admin.username,role:admin.role},token,message:'Admin logged in successfully'});
	}catch(error){
		res.status(400).send({message:'Error logging in',error:error.message});
	}
};

module.exports={signup,login};


