// figure out what credentials to run

if (process.env.NODE_ENV === "production") {
  // production
  module.exports = require("./prod");
} else {
  // development, use development keys
  module.exports = require("./dev");
}
