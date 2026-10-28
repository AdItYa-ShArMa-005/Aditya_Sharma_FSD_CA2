require('dotenv').config();
const express = require('express');
const connectDB = require('./DB/connectDB');
const booksRoute = require('./Routes/booksRoute');
const app = express();

const PORT = process.env.PORT;

app.use(express.json());

connectDB();

app.use('/api/books',booksRoute);

app.listen(PORT,() => {
    console.log('Server listening at port : ',PORT);
});