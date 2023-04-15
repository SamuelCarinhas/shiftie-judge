import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    semester: {
        type: Number,
        required: true
    },
    public: {
        type: Boolean,
        required: true
    },
    students: [
        {
            type: mongoose.Schema.Types.ObjectId
        }
    ]
});

export default mongoose.model('Course', courseSchema);