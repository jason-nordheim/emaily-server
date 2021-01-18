const express = require('express')
const passport = require('passport') // passport library 
const GoogleStrategy = require('passport-google-oauth20').Strategy // strategy for passport 

const app = express()

passport.use(new GoogleStrategy())

app.get('/', (req, res) => {
    res.send({ test: 'Is this working?' })
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server started on ${PORT}`)) 