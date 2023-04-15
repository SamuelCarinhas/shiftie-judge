const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: true,
        maxLength: 100
    }, 
    passwordHash: {
        type: String
    }
});

module.exports = mongoose.model('User', userSchema);
