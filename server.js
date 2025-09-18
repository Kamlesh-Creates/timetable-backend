const express=require('express');
const dotenv=require('dotenv');
const db=require('./db');
const authMiddleware=require('./middlewares/authmiddleware');
dotenv.config();

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

const adminRoutes=require('./routes/adminroute');
const teacherRoutes=require('./routes/teacherRoutes');
const classroomRoutes=require('./routes/classroomRoutes');
const divisionRoutes=require('./routes/divisionRoutes');
const subjectRoutes=require('./routes/subjectRoutes');
const settingsRoutes=require('./routes/settingsRoutes');

app.use('/admin',adminRoutes);
app.use('/teacher',authMiddleware,teacherRoutes);
app.use('/classroom',authMiddleware,classroomRoutes);
app.use('/division',authMiddleware,divisionRoutes);
app.use('/subject',authMiddleware,subjectRoutes);
app.use('/settings',authMiddleware,settingsRoutes);



const PORT=process.env.PORT||5000;
app.listen(PORT,()=>{
console.log(`Server listening on port ${PORT}`);
});

module.exports=app;


