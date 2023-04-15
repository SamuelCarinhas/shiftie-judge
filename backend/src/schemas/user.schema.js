import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: true,
        maxLength: 100
    },
    name: {
        type: String
    },
    passwordHash: {
        type: String
    },
    confirmationCode: {
        type: String
    },
    confirmed: {
        type: Boolean,
        default: false
    }
});

export default mongoose.model('User', userSchema);
