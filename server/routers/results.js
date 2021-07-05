const express = require('express');
const resultController = require('../controllers/resutl.js');
const resultRouter = express.Router();


resultRouter.get('/',resultController.get_results);
resultRouter.post('/', resultController.post_result);
resultRouter.delete('/:id', resultController.delete_result);


module.exports = resultRouter;