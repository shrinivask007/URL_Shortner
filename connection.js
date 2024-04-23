const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/urlShortener')
    .then(() => {
        console.log('Connected to MongoDB Server');
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    });

module.exports =mongoose.connection;