const passport = require("passport");

module.exports = (app) => {
  /**
   * Auth & Passport
   * o Auth route handler using passport
   */
  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"],
    })
  );

  /**
   * Auth & Passport
   * use code received from google to retrieve user profile
   */
  app.get("/auth/google/callback", passport.authenticate("google"));

  /** add route to retrieve the current user from cookies */
  app.get("/api/current_user", (req, res) => {
    res.send(req.user);
  });

  /** add route to logout user  */
  app.get("/api/logout", (req, res) => {
    req.logout(); // removes the user id from the cookie
    res.send(req.user); // send response (should respond with a nulled user object)
  });
};
