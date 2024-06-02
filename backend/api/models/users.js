const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    password: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    full_name: { type: String },
    address: { type: String },
    phone: { type: String }
});

module.exports = mongoose.model('User', userSchema);
