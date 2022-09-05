const express = require('express');
const app = express();
const cors = require('cors');
const config = require('config');
const mongoose = require(`mongoose`);

app.use(express.json())
app.use(cors())
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/link', require('./routes/linkRoutes'));
app.use('/t', require('./routes/redirectRoutes'));

const PORT = config.get('port') || 5000;

async function start(){
    try {
        await mongoose.connect("mongodb+srv://admin:1234@cluster0.zdqzvju.mongodb.net/MERN-reference-app?retryWrites=true&w=majority")
        app.listen(PORT, () => {
            console.log('server started');
        })
    } catch (error) {
        console.log('server error',error.message);
        process.exit(1)
    }
}

start()
