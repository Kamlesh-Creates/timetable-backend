const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const db = require('./db');
const authMiddleware = require('./middlewares/authmiddleware');

dotenv.config();

const app = express();

const corsOptions = {
    origin: "http://localhost:3000",
    methods: ['GET', 'POST', 'DELETE', 'PUT', 'OPTIONS'],
    credentials: true,
    allowedHeaders: ['Content-Type', 'Authorization'],
  };
  app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const adminRoutes = require('./routes/adminroute');
const teacherRoutes = require('./routes/teacherRoutes');
const classroomRoutes = require('./routes/classroomRoutes');
const divisionRoutes = require('./routes/divisionRoutes');
const subjectRoutes = require('./routes/subjectRoutes');
const settingsRoutes = require('./routes/settingsRoutes');

app.use('/admin', adminRoutes);
app.use('/teacher', authMiddleware, teacherRoutes);
app.use('/classroom', authMiddleware, classroomRoutes);
app.use('/division', authMiddleware, divisionRoutes);
app.use('/subject', authMiddleware, subjectRoutes);
app.use('/settings', authMiddleware, settingsRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

module.exports = app;
