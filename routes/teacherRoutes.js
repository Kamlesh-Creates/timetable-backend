const express=require('express');
const router=express.Router();
const {getAllTeachers,createTeacher,updateTeacher,deleteTeacher}=require('../controllers/teacherController');

router.get('/api/teachers',getAllTeachers);
router.post('/api/teachers',createTeacher);
router.put('/api/teachers/:id',updateTeacher);
router.delete('/api/teachers/:id',deleteTeacher);

module.exports=router;


