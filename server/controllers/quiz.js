const QuizModel = require('../models/quiz.js');


const get_quizzes = (req, res) => {
  QuizModel.find()
    .then(data => {
      res.status(200).json(data);
    })
    .catch(err => {
      console.log(err)
      res.status(500).send(err);
    })
}
const post_quiz = (req, res) => {
  const quiz = new QuizModel(req.body);
  quiz.save()
    .then(data => {
      res.status(200).json(data);
    })
    .catch(err => {
      console.log(err)
      res.status(500).send(err);
    })
}
const delete_quiz = (req, res) =>{
  QuizModel.findByIdAndDelete(req.params.id)
    .then(data =>{
      res.status(200).json(data);
    })
    .catch(err =>{
      console.log(err)
      console.log(err)
      res.status(500).send(err);
    })
}
const get_quiz_by_id = (req, res) =>{
  QuizModel.findById(req.params.id)
    .then(data =>{
      res.status(200).json(data);
    })
    .catch(err =>{
      console.log(err);
      res.status(404).send(err);
    })
}

module.exports = {
  get_quizzes,
  post_quiz,
  delete_quiz,
  get_quiz_by_id
}