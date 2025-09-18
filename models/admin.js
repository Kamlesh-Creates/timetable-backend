const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const adminSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, unique: true, sparse: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['superadmin', 'admin'], default: 'admin' },
}, { timestamps: true });


adminSchema.pre('save', async function(next) {
    const user = this;
    if (!user.isModified('password')) return next();
    try {
        const salt = await bcrypt.genSalt(10);
        const hashedpassword = await bcrypt.hash(user.password, salt);
        user.password = hashedpassword;
        next();
    } catch (error) {
        return next(error);
    }
});

const Admin = mongoose.model('Admin', adminSchema);

module.exports = Admin;
