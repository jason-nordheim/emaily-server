const express = require('express')
const passport = require('passport') // passport library 
const GoogleStrategy = require('passport-google-oauth20').Strategy // strategy for passport 

const keys = require('./config/keys')

const app = express()

passport.use(new GoogleStrategy({
    clientID: keys.web.client_id, // public token 
    clientSecret: keys.web.client_secret, // private token 
    tokenURL: keys.web.token_uri,
    callbackURL: keys.web.callbackURL,
}, (accessToken) => {
    console.log(accessToken)
}))

app.get('/auth/google', passport.authenticate('google', {
    scope: ['profile', 'email']
}))

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server started on ${PORT}`)) 