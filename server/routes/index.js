import { Router } from 'express';
import questions from '../database/questions.js'
const router = new Router;

//fetch all questions 
router.get('/questions', (req, res) => {
    res.json({
        status: 'success',
        data: {
            questions,
        },
    });
});

export default router;