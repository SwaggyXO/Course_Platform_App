const express = require('express');
const cors = require('cors');
const app = express();
const connectDB = require('./db/connection');
const port = 5500;

require("dotenv").config();

const router = require('./routes/routes');

app.use(express.json());

app.use(cors({
    origin:'http://localhost:3000'
}))

app.use('/course', router)

const start = async () => {
    try {
        await connectDB(process.env.MONGO_CONNECTION);
        app.listen(port, (req, res) => {
            console.log('Running on port:', port)
        })
    } catch (error) {
        
    }
}

start();