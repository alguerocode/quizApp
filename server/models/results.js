const mongoose = require('mongoose');



const resultSchema = new mongoose.Schema({
  title: String,
  description: String,
  degree: String
}, { timestamps: true })


const ResultModel = mongoose.model('Result', resultSchema);

module.exports = ResultModel;