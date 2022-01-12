const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectDb = require('./db/connect');
const userRouter = require('./routes/user-router');
const routes = require('./routes/index');
const app = express();
connectDb();
const PORT = 3002;
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const options = require('./swagger-options');
const openapiSpecification = swaggerJsDoc(options);

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Welcome to quizz application!')
});

app.use('/docs', swaggerUi.serve, swaggerUi.setup(openapiSpecification));
app.use('/api', userRouter);
app.use('/api', routes);

app.listen(PORT, (err) => {
    if (err) console.error('❌ Unable to connect the server: ', err);
    console.log(`🌍 Server listening on port ${PORT} environment`);
});