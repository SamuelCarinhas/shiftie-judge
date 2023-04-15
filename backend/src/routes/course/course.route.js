import express from 'express';
import Course from "../../schemas/course.schema.js";
const router = express.Router();

router.get('/list', (req, res) => {
    Course.find()
        .then(courses => res.status(200).json(courses))
        .catch((err) => res.status(500).json({
            errors: [
                {
                    msg: err
                }
            ]
        }));
});

export default router;