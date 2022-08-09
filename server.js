const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");

const usersRouter = require("./routes/api/users");
const plansRouter = require("./routes/api/plans");
const invitesRouter = require("./routes/api/invites");
require("dotenv").config();

const app = express();

//DB config
const db = require("./config/keys").mongoURI;
// connect to Mongo
mongoose
  .connect(db)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "client", "build")));

// Use Routes
app.use("/api/invites", invitesRouter);
app.use("/api/users", usersRouter);
app.use("/api/plans", plansRouter);


app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

module.exports = app;
