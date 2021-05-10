const ResultModel = require('../models/results.js')

const get_results = async (req, res) => {
  try {
    const data = await ResultModel.find();
    res.status(200).json(data);
  } catch (error) {
    console.log(error)
    res.status(500).send(error);
  }
}
const delete_result = (req, res) => {
  ResultModel.findByIdAndDelete(req.params.id)
    .then(data => {
      res.status(200).json(data);
    })
    .catch(err => {
      console.log(err);
      res.status(500).send(err);
    })
}
const post_result = (req, res) => {
  const result = new ResultModel(req.body);
  result.save()
    .then(data => {
      res.status(200).json(data);
    })
    .catch(err => {
      console.log(err);
      res.status(500).send(err);
    })
}
module.exports = {
  get_results,
  post_result,
  delete_result
}