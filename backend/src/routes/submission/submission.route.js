import express from 'express';
import Submission from "../../schemas/submission.schema.js";
const router = express.Router();

router.get('/list', (req, res) => {
    Submission.find(req.query)
        .then(submissions => res.status(200).json(submissions))
        .catch(err => res.status(500).json({
            errors: [
                {
                    msg: err
                }
            ]
        }));
});

export default router;