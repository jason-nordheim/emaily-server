const passport = require('passport');

module.exports = (app) => {
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
};

