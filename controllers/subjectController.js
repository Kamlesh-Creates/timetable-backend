const Subject=require('../models/subject');

const getAllSubjects=async(req,res)=>{
    try{
        const subjects=await Subject.find();
        res.status(200).send(subjects);
    }catch(error){
        res.status(500).send({message:'Failed to fetch subjects',error:error.message});
    }
};

const createSubject=async(req,res)=>{
    try{
        const subject=new Subject(req.body);
        await subject.save();
        res.status(201).send(subject);
    }catch(error){
        res.status(400).send({message:'Failed to create subject',error:error.message});
    }
};

const updateSubject=async(req,res)=>{
    try{
        const {id}=req.params;
        const updated=await Subject.findByIdAndUpdate(id,req.body,{new:true,runValidators:true});
        if(!updated) return res.status(404).send({message:'Subject not found'});
        res.status(200).send(updated);
    }catch(error){
        res.status(400).send({message:'Failed to update subject',error:error.message});
    }
};

const deleteSubject=async(req,res)=>{
    try{
        const {id}=req.params;
        const deleted=await Subject.findByIdAndDelete(id);
        if(!deleted) return res.status(404).send({message:'Subject not found'});
        res.status(200).send({message:'Subject deleted successfully'});
    }catch(error){
        res.status(400).send({message:'Failed to delete subject',error:error.message});
    }
};

module.exports={getAllSubjects,createSubject,updateSubject,deleteSubject};


