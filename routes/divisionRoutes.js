const express=require('express');
const router=express.Router();
const {getAllDivisions,createDivision,updateDivision,deleteDivision}=require('../controllers/divisionController');

router.get('/api/divisions',getAllDivisions);
router.post('/api/divisions',createDivision);
router.put('/api/divisions/:id',updateDivision);
router.delete('/api/divisions/:id',deleteDivision);

module.exports=router;


