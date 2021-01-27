// production keys
module.exports = {
  web: {
    client_id: process.env.GOOGLE_CLIENT_ID,
    client_secret: process.env.GOOGLE_CLIENT_SECRET,
    mongoAtlas: {
      uri: process.env.MONGO_URI,
    },
    cookieKey: process.env.COOKIE_KEY,
  },
};