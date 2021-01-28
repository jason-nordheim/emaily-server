// production keys
console.log(process.env.REDIRECT_URI);

module.exports = {
  web: {
    client_id: process.env.GOOGLE_CLIENT_ID,
    client_secret: process.env.GOOGLE_CLIENT_SECRET,
    redirect_uris: [process.env.REDIRECT_URI],
  },
  mongoAtlas: {
    uri: process.env.MONGO_URI,
  },
  cookieKey: process.env.COOKIE_KEY,
};
