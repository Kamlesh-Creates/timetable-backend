const Location=require('../models/classroom');

const getAllClassrooms=async(req,res)=>{
    try{
        const classrooms=await Location.find();
        res.status(200).send(classrooms);
    }catch(error){
        res.status(500).send({message:'Failed to fetch classrooms',error:error.message});
    }
};

const createClassroom=async(req,res)=>{
    try{
        const classroom=new Location(req.body);
        await classroom.save();
        res.status(201).send(classroom);
    }catch(error){
        res.status(400).send({message:'Failed to create classroom',error:error.message});
    }
};

const updateClassroom=async(req,res)=>{
    try{
        const {id}=req.params;
        const updated=await Location.findByIdAndUpdate(id,req.body,{new:true,runValidators:true});
        if(!updated) return res.status(404).send({message:'Classroom not found'});
        res.status(200).send(updated);
    }catch(error){
        res.status(400).send({message:'Failed to update classroom',error:error.message});
    }
};

const deleteClassroom=async(req,res)=>{
    try{
        const {id}=req.params;
        const deleted=await Location.findByIdAndDelete(id);
        if(!deleted) return res.status(404).send({message:'Classroom not found'});
        res.status(200).send({message:'Classroom deleted successfully'});
    }catch(error){
        res.status(400).send({message:'Failed to delete classroom',error:error.message});
    }
};

module.exports={getAllClassrooms,createClassroom,updateClassroom,deleteClassroom};


