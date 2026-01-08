// npm i  express

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const connectDB = require("../Backend/db.js");
const router = express.Router();
const loginSchema = require("../Backend/Schemas/UserLoginSchema.js");
const {
  defaultAppRoute,
  loginRoute,
  signUpRoute,
} = require("../Backend/Routes/routes.js");

console.log("UserLoginSchema", loginSchema);

const app = express();
connectDB();

const corsOptions = {
  origin: "http://localhost:5173",
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
};
app.use(cors(corsOptions));

app.use(express.json());
app.get("/", (req, res) => {
  res.send("initiali file is loading");
});
// signUp
app.post("/user-signup", async (req, res) => {
  const { userName, fullName, password, captcha, conformPassword } = req.body;

  try {
    const userDetails = {
      userName,
      password,
      fullName,
      conformPassword,
      captcha,
    };

    const newUser = new loginSchema(userDetails);
    try {
      const savedUser = await newUser.save();
      console.log("Document inserted:", savedUser);
    } catch (err) {
      console.error(err);
    }
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

// 2ND API
// Login api

app.post("/login", async (req, res) => {
  const { userName, password, captcha } = req.body;

  // const userDetails = {
  //   userName,
  //   password,
  //   captcha,
  // };

  try {
    const findUserNameFromDb = await loginSchema.findOne({
      userName: userName,
    });
    console.log(findUserNameFromDb, "userDetails");

    findUserNameFromDb
      ? res.send({ loginUser: "user logged insuccesfully", isLoggedIn: true })
      : res.send({ error: "there is no user or authenticatation failed" });

    // shiva ? true : false
  } catch (err) {
    console.error(err);
  }
});

app.listen(8000);
