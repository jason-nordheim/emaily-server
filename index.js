const express = require('express');
const passport = require('passport'); // passport library 
const GoogleStrategy = require('passport-google-oauth20').Strategy; // strategy for passport 

const keys = require('./config/keys');

const app = express();

passport.use(new GoogleStrategy({
    clientID: keys.web.client_id, // public token 
    clientSecret: keys.web.client_secret, // private token 
    //tokenURL: keys.web.token_uri,
    callbackURL: keys.web.redirect_uris[0],
}, (accessToken, refreshToken, profile, done) => {
    // accessToken ya29.a0AfH6SMDlN4oqD_348ILwKx79GJfMfTU4i5Bq1xnh7LZYbfuBOy7avnpjK3hjLUjhR3-oEpwmWcB1pi1_S6cqJFbpZGkez3I5l7piQR76zLBbqHy4V0BX-fiveXs_R8AOlim29byIujFeRRRIpNb07vhsKqSlqcoPboGGSpNPl8c
    // refreshToken undefined
    // profile {
    //   id: '107599719319903871941',
    //   displayName: 'Jason Nordheim',
    //   name: { familyName: 'Nordheim', givenName: 'Jason' },
    //   emails: [ { value: 'jason.nordheim@gmail.com', verified: true } ],
    //   photos: [
    //     {
    //       value: 'https://lh6.googleusercontent.com/-TXREnn0dcqo/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuckMg3M30FT9zICCzKs1tJxiwNpohQ/s96-c/photo.jpg'
    //     }
    //   ],
    //   provider: 'google',
    //   _raw: '{\n' +
    //     '  "sub": "107599719319903871941",\n' +
    //     '  "name": "Jason Nordheim",\n' +
    //     '  "given_name": "Jason",\n' +
    //     '  "family_name": "Nordheim",\n' +
    //     '  "picture": "https://lh6.googleusercontent.com/-TXREnn0dcqo/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuckMg3M30FT9zICCzKs1tJxiwNpohQ/s96-c/photo.jpg",\n' +
    //     '  "email": "jason.nordheim@gmail.com",\n' +
    //     '  "email_verified": true,\n' +
    //     '  "locale": "en"\n' +
    //     '}',
    //   _json: {
    //     sub: '107599719319903871941',
    //     name: 'Jason Nordheim',
    //     given_name: 'Jason',
    //     family_name: 'Nordheim',
    //     picture: 'https://lh6.googleusercontent.com/-TXREnn0dcqo/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuckMg3M30FT9zICCzKs1tJxiwNpohQ/s96-c/photo.jpg',
    //     email: 'jason.nordheim@gmail.com',
    //     email_verified: true,
    //     locale: 'en'
    //   }
    // }
    console.log(`accessToken`, accessToken);
    console.log(`refreshToken`, refreshToken);
    console.log(`profile`, profile);

}));

/**
 * Auth & Passport 
 * o Auth route handler using passport 
 */
app.get('/auth/google', passport.authenticate('google', {
    scope: ['profile', 'email']
}));

/**
 * Auth & Passport 
 * use code received from google to retrieve user profile 
 */
app.get('/auth/google/callback', passport.authenticate('google'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on ${PORT}`)); 