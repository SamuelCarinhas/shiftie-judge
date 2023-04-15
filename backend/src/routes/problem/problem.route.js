import express from 'express';
import Problem from "../../schemas/problem.schema.js";
const router = express.Router();

router.get('/list', (req, res) => {
    Problem.find(req.query)
        .then(problems => res.status(200).json(problems))
        .catch(err => res.status(500).json({
            errors: [
                {
                    msg: err
                }
            ]
        }));
});

router.get('/', (req, res) => {
   Problem.findOne(req.query)
       .then(problem => res.status(200).json(problem))
       .catch(err => res.status(500).json({
           errors: [
               {
                   msg: err
               }
           ]
       }));
});

export default router;