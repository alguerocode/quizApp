const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const quizRouter = require('./routers/quiz.js');
const resultRouter = require('./routers/results.js');

const app = express();
const PORT = process.env.PORT || 8080;



app.use(cors()); // to do ;
app.use(bodyParser.json({ strict: true }));
app.use(bodyParser.urlencoded({ extended: true }));

const DB_URI = 'mongodb+srv://typescript:qLVB40t09yLh9S2f@cluster0.697wy.mongodb.net/quiz-app?retryWrites=true&w=majority'
mongoose.connect(DB_URI, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
  .then(() => app.listen(PORT,()=>{console.log('listen in port ' + PORT)}))
  .catch(err => console.log(err))

app.use('/results',resultRouter);
app.use('/quizzes',quizRouter);
app.use('/',(req,res)=>res.send('welcome there to quiz server'));
// 404
app.use((req, res) => {
  res.status(404).send('404', { title: '404' });
});