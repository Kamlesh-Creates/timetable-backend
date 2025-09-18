const express=require('express');
const router=express.Router();
const {getAllSubjects,createSubject,updateSubject,deleteSubject}=require('../controllers/subjectController');

router.get('/api/subjects',getAllSubjects);
router.post('/api/subjects',createSubject);
router.put('/api/subjects/:id',updateSubject);
router.delete('/api/subjects/:id',deleteSubject);

module.exports=router;


