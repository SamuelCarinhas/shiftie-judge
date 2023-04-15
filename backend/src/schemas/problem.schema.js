import mongoose from "mongoose";

const problemSchema = new mongoose.Schema({
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    problem: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Problem'
    },
    course: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course'
    }
});

export default mongoose.model('Problem', problemSchema);
