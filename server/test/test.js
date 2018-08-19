import assert from 'assert';
import request from 'supertest';
import app from '../index'
import questions from '../database/questions'


describe('the GET /questions api endpoint', () => {
    it('returns all questions from database', async () => {
        const response = await request(app).get('/api/v1/questions');
        assert.equal(response.body.status, 'success');
        assert.equal(response.body.data.questions.length, questions.length)

    });
});

describe('the GET /questions/:id api endpoint', () => {
    it('returns a single question from database', async () => {
        const response = await request(app).get('/api/v1/questions/501233');
        assert.equal(response.body.status, 'success');
        assert.equal(response.body.data.question.id, 501233);
        assert.equal(response.body.data.question.title, "Lorem Ipsum is simply dummy");

    });
    it('returns a 404 ', async () => {
        const response = await request(app).get('/api/v1/questions/5012336');

        assert.equal(response.body.status, 'fail');
        assert.equal(response.body.data.message, 'Question not found.')


    });
});

describe('the POST /questions api endpoint', () => {
    it('returns a newly created question', async () => {
        const dbCount = questions.length;
        const payload = {
            title: 'New question title',
            description: 'new question description',
            userId: 23232,
        };
        const response = await request(app).post('/api/v1/questions').send(payload);


        assert.equal(response.body.status, 'success');
        assert.ok(response.body.data.question.id);
        assert.equal(response.body.data.question.title, payload.title);
        assert.equal(response.body.data.question.userId, payload.userId);
        assert.equal(response.body.data.question.description, payload.description);
        assert.equal(questions.length, dbCount + 1)

    });
});

describe('the POST /questions/:id/answers api endpoint', () => {
    it('returns a newly created answer', async () => {
   
        const payload = {
            title: 'New question title',
            description: 'new question description',
            userId: 23232,
        };
        const response = await request(app).post('/api/v1/questions/501233/answers').send(payload);

        assert.equal(response.body.status, 'success');
        assert.ok(response.body.data.question.id);
        assert.equal(response.body.data.question.title, payload.title);
        assert.equal(response.body.data.question.userId, payload.userId);
        assert.equal(response.body.data.question.description, payload.description);
    

    });
});