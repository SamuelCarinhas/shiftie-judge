import express from 'express';
import Problem from "../../schemas/problem.schema.js";
import uploadFile from '../../utils/multer.util.js';
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

router.post('/submit', (req, res) => {
    uploadFile(req, res, (err) => {
        if(err)
            return res.status(500).json({ errors: [ { msg: err } ] })
        console.log(req.file);
        res.status(200).json({ msg: 'File uploaded' } )
    });
});

export default router;