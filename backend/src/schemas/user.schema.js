import mongoose from "mongoose";

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

export default mongoose.model('User', userSchema);
