const Teacher=require('../models/teachers');

const getAllTeachers=async(req,res)=>{
    try{
        const teachers=await Teacher.find();
        res.status(200).send(teachers);
    }catch(error){
        res.status(500).send({message:'Failed to fetch teachers',error:error.message});
    }
};

const createTeacher=async(req,res)=>{
    try{
        const teacher=new Teacher(req.body);
        await teacher.save();
        res.status(201).send(teacher);
    }catch(error){
        res.status(400).send({message:'Failed to create teacher',error:error.message});
    }
};

const updateTeacher=async(req,res)=>{
    try{
        const {id}=req.params;
        const updated=await Teacher.findByIdAndUpdate(id,req.body,{new:true,runValidators:true});
        if(!updated) return res.status(404).send({message:'Teacher not found'});
        res.status(200).send(updated);
    }catch(error){
        res.status(400).send({message:'Failed to update teacher',error:error.message});
    }
};

const deleteTeacher=async(req,res)=>{
    try{
        const {id}=req.params;
        const deleted=await Teacher.findByIdAndDelete(id);
        if(!deleted) return res.status(404).send({message:'Teacher not found'});
        res.status(200).send({message:'Teacher deleted successfully'});
    }catch(error){
        res.status(400).send({message:'Failed to delete teacher',error:error.message});
    }
};

module.exports={getAllTeachers,createTeacher,updateTeacher,deleteTeacher};


