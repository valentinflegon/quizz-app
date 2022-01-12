const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectDb = require('./db/connect');
const userRouter = require('./routes/user-router');
const routes = require('./routes/index');
connectDb();

const PORT = 3002;

const app = express();
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Library API",
            version: "1.0.0",
            description: "A simple Express Library API",
        },
        servers: [
            {
                url: "http://localhost:3002",
            },
        ],
    },
    apis: ["./routes/*.js"],
}
const specs = swaggerJsDoc(options);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Welcome to quizz application!')
});

app.use('/api', userRouter);
app.use('/api', routes);

app.listen(PORT, (err) => {
    if (err) console.error('❌ Unable to connect the server: ', err);
    console.log(`🌍 Server listening on port ${PORT} environment`);
});