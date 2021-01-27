const mongoose = require('mongoose');
const { Schema } = mongoose;

// define user Schema 
const userSchema = new Schema({
    googleId: String
});

// inform mongoose 
mongoose.model('users', userSchema);