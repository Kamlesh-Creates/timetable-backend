const Division=require('../models/division');

const getAllDivisions=async(req,res)=>{
    try{
        const divisions=await Division.find();
        res.status(200).send(divisions);
    }catch(error){
        res.status(500).send({message:'Failed to fetch divisions',error:error.message});
    }
};

const createDivision=async(req,res)=>{
    try{
        const division=new Division(req.body);
        await division.save();
        res.status(201).send(division);
    }catch(error){
        res.status(400).send({message:'Failed to create division',error:error.message});
    }
};

const updateDivision=async(req,res)=>{
    try{
        const {id}=req.params;
        const updated=await Division.findByIdAndUpdate(id,req.body,{new:true,runValidators:true});
        if(!updated) return res.status(404).send({message:'Division not found'});
        res.status(200).send(updated);
    }catch(error){
        res.status(400).send({message:'Failed to update division',error:error.message});
    }
};

const deleteDivision=async(req,res)=>{
    try{
        const {id}=req.params;
        const deleted=await Division.findByIdAndDelete(id);
        if(!deleted) return res.status(404).send({message:'Division not found'});
        res.status(200).send({message:'Division deleted successfully'});
    }catch(error){
        res.status(400).send({message:'Failed to delete division',error:error.message});
    }
};

module.exports={getAllDivisions,createDivision,updateDivision,deleteDivision};


