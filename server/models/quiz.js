const mongoose = require('mongoose');



const quizSchema = new mongoose.Schema({
  title: String,
  description: String,
  questions:[],
  trueValue: String
}, { timestamps: true })

const QuizModel = mongoose.model('Quiz', quizSchema);

module.exports = QuizModel;