const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const db = require('./db/connect');
const userRouter = require('./routes/user-router');

const app = express();
const PORT = 3001;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.get('/', (req, res) => {
    res.send('Welcome to quizz application!')
});


app.use('/api', userRouter);

app.listen(PORT, (err) => {
    if (err) console.error('❌ Unable to connect the server: ', err);
    console.log(`🌍 Server listening on port ${PORT} environment`);
});