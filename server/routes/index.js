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

    return res.status(404).json({
        status: 'fail',
        data: {
            message: 'Question not found.',
        },
    });
});

router.post('/questions', (req, res) => {
    // TODO: check if the data required was provided.
    const { title, description, userId } = req.body;

    const question = {
        id: parseInt((Math.random() * 10000).toFixed(), 10),
        title,
        description,
        userId,
        repliesCount: 0,
        created_at: new Date(),
    };

    questions.push(question);

    return res.json({
        status: 'success',
        data: {
            question,
        },
    });
})

router.post('/questions/:id/answers', (req, res) => {
    // TODO: check if the data required is provided
    const { title, description, userId } = req.body;

    const question = {
        id: parseInt((Math.random() * 10000).toFixed(), 10),
        title,
        description,
        userId,
        repliesCount: 0,
        created_at: new Date(),
    };

    questions.push(question);

    return res.json({
        status: 'success',
        data: {
            question,
        },
    });
})

export default router;