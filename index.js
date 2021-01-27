const express = require('express');
const mongoose = require('mongoose');
const keys = require("./config/keys");

require('./models/user'); // no exports, just need this to run 
require('./services/passport'); // no exports, just need this to run 

mongoose.connect(keys.mongoAtlas.uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const app = express();

// activate google routes 
require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on ${PORT}`)); 