const express=require('express');
const router=express.Router();
const {getSettings,createSettings,updateSettings}=require('../controllers/settingsController');

router.get('/api/settings',getSettings);
router.post('/api/settings',createSettings);
router.put('/api/settings/:id',updateSettings);

module.exports=router;


