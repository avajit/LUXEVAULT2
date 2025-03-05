const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    address: { type: String, required: false }, // Added address field

    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, required: true, enum: ['buyer', 'supplier'] }
});

module.exports = mongoose.model('User', UserSchema);
