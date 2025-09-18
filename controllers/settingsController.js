const Settings=require('../models/setting');

const getSettings=async(req,res)=>{
    try{
        const settings=await Settings.findOne();
        res.status(200).send(settings||{});
    }catch(error){
        res.status(500).send({message:'Failed to fetch settings',error:error.message});
    }
};

const createSettings=async(req,res)=>{
    try{
        const existing=await Settings.findOne();
        if(existing){
            return res.status(400).send({message:'Settings already exist'});
        }
        const settings=new Settings(req.body);
        await settings.save();
        res.status(201).send(settings);
    }catch(error){
        res.status(400).send({message:'Failed to create settings',error:error.message});
    }
};

const updateSettings=async(req,res)=>{
    try{
        const {id}=req.params;
        const updated=await Settings.findByIdAndUpdate(id,req.body,{new:true,runValidators:true});
        if(!updated) return res.status(404).send({message:'Settings not found'});
        res.status(200).send(updated);
    }catch(error){
        res.status(400).send({message:'Failed to update settings',error:error.message});
    }
};

module.exports={getSettings,createSettings,updateSettings};


