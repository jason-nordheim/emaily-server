const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");
const keys = require("./config/keys");

require("./models/user"); // no exports, just need this to run
require("./services/passport"); // no exports, just need this to run

mongoose.connect(keys.mongoAtlas.uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const app = express();

const thirtyDaysInMilliseconds = 30 * 24 * 60 * 60 * 1000; // 30 days

/** setup cookie-session middleware */
app.use(
  cookieSession({
    maxAge: thirtyDaysInMilliseconds,
    keys: [keys.cookieKey],
  })
);

/** tell passport to use cookies as a session (with cookieSession) */
app.use(passport.initialize());
app.use(passport.session());

/* activate google routes */
require("./routes/authRoutes")(app);

const PORT = process.env.PORT || 5000;
const HOST_NAME = process.env.PORT
  ? "sheltered-citadel-72082.herokuapp.com"
  : "localhost";

app.get("/", (req, res) => {
  res.statusCode(404).send();
});

app.get("/favicon.ico", (req, res) => {
  res.statusCode(404).send();
});

app.listen(PORT, HOST_NAME, () => console.log(`Server started on ${PORT}`));
