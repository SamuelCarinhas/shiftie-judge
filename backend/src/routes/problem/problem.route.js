import express from 'express';
import Problem from "../../schemas/problem.schema.js";
import uploadFile from '../../utils/multer.util.js';
import { exec } from 'child_process';
import fs from "fs";
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

router.post('/submit', async (req, res) => {
    uploadFile(req, res, async (err) => {
        if(err)
            return res.status(500).json({ errors: [ { msg: err } ] })
        let path = `./uploads/${req.file.filename}.html`;
        await fs.writeFile(path, req.body.input, () => {});
        await exec(`node ./uploads/script.js ${path}`, () => {});
        console.log(`C:/Users/carin/anaconda3/python.exe ./uploads/eval.py ${req.file.path} ${path}.png`);
        setTimeout(() => {
            exec(`C:/Users/carin/anaconda3/python.exe ./uploads/eval.py ${req.file.path} ${path}.png`, (error, stdout, stderr) => {
                res.status(200).json({ msg: stdout.trim() } );
            });
        }, 1000);
    });
});

export default router;