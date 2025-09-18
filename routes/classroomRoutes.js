const express=require('express');
const router=express.Router();
const {getAllClassrooms,createClassroom,updateClassroom,deleteClassroom}=require('../controllers/classroomController');

router.get('/api/classrooms',getAllClassrooms);
router.post('/api/classrooms',createClassroom);
router.put('/api/classrooms/:id',updateClassroom);
router.delete('/api/classrooms/:id',deleteClassroom);

module.exports=router;


