const passport = require("passport"); // passport library
const GoogleStrategy = require("passport-google-oauth20").Strategy; // strategy for passport
const keys = require("../config/keys");
const mongoose = require("mongoose");

const User = mongoose.model("users"); // retrieve 'users' model from schema (class)

passport.serializeUser((user, done) => {
  /** we serialize user to reference the internal ID for the user,
   * instead of the id associated with the auth method (e.g. google ID)
   */
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  /** take the id (from cookies) back into a mongoose userModel  */
  User.findById(id).then((user) => {
    done(null, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.web.client_id, // public token
      clientSecret: keys.web.client_secret, // private token
      //tokenURL: keys.web.token_uri,
      callbackURL: keys.web.redirect_uris[0],
    },
    (accessToken, refreshToken, profile, done) => {
      User.findOne({ googleId: profile.id }).then((existingUser) => {
        if (existingUser) {
          // record exists
          done(null, existingUser);
        } else {
          // create a new record
          new User({ googleId: profile.id }).save().then((user) => {
            done(null, user);
          });
        }
      });
    }
  )
);
