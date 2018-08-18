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

router.get('/questions/:id', (req, res) => {
    // get the id
    let { id } = req.params;

    id = parseInt(id, 10);
    // find the question with this id from the database (questions array)
    const finder = currentQuestion => currentQuestion.id === id;
    const question = questions.find(finder);
    // return question or a 404
    if (question) {
        return res.json({
            status: 'success',
            data: {
                question,
            },
        });
    }
});
export default router;