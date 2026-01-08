const express = require("express");
const app = express();

const defaultAppRoute = app.get("/", (req, res) => {
  res.send("initiali file is loading");
});

const loginRoute = app.post("/login", (req, res) => {
  console.log(req.body.email, "req");

  try {
    const userDetails = {
      userName: req.body.email,
      password: req.body.password,
      captcha: "TtHq",
    };

    res.send({
      data: userDetails,
      message: "User Logged in succesfully",
      isAutheticated: true,
      isLoggedIn: true,
    });
  } catch (error) {
    console.log(error);
  }
});

const signUpRoute = app.post("/profile/user-signup", (req, res) => {
  res.send("hgelllo");
});

module.exports = { defaultAppRoute, loginRoute, signUpRoute };
