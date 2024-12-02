const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;
const host = '127.0.0.1';
const router = require('./router');

// Middleware
app.use(cors());
app.use(
    express.urlencoded({
        extended: true,
    })
)
app.use(express.json());


const url = 'mongodb+srv://admin:admin12345@cluster0.4yada.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

const connect = async () => {
    try{
        await mongoose.connect(url);
        console.log('MongoDB connected');
    }
    catch(error){
        console.log('MongoDB connection failed');
    }
};

connect();

const server = app.listen(port, host ,() => {
    console.log(`Server is running on port ${server.address().port})`);
}   );

app.use('/api', router);