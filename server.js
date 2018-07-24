const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config({ path: 'variables.env' });
const Recipe = require('./models/Recipe');
const User = require('./models/User');

// Connects to database
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('Connected to the database')
    })
    .catch(err => {
        console.error(err);
    })

// Initialize express server
const app = express();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
})