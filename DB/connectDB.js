const mongoose = require('mongoose');

const connectDB = async() => {
    try{
        const conn = await mongoose.connect(process.env.MONGODB_URI);
        console.log('Database connected successfully');
    }
    catch(err)
    {
        console.log('unable to connect to database');
        console.log('Error : ',err);
    }
};

module.exports = connectDB;