const mongoose = require('mongoose');

const divisionSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    
}, { timestamps: true });

const Division = mongoose.model('Division', divisionSchema);

module.exports = Division;
