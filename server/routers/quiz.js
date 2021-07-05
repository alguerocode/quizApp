const express = require('express');
const quizController = require('../controllers/quiz.js')
const quizRouter = express.Router();


quizRouter.get('/', quizController.get_quizzes);
quizRouter.post('/', quizController.post_quiz);
quizRouter.get('/:id', quizController.get_quiz_by_id);
quizRouter.delete('/:id', quizController.delete_quiz);

module.exports = quizRouter;
