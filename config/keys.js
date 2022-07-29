module.exports = {
  // todo get rid of the mongodb url once it's on main and deployed
  mongoURI:
    process.env.MONGOURI ||
    "mongodb+srv://Bob:bob123@cluster0.dqdwbum.mongodb.net/?retryWrites=true&w=majority",
};
