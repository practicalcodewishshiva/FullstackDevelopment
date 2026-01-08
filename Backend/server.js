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

app.listen(8000);

// // Step 1 login api

// const userDetails = {
//   userName: "Nithish",
//   password: 12345,
//   captha: "wwefwerwre",
// };

// oka place ni data storre chedda m ahjkutunna ---- Mongodb

// const userDetails = {
//   userName: "Nithish", string enter cheyalki aprt number iste nenu store chesukonu
//   password: "sydtgfjhsdhfgsd",
//   captha: "wwefwerwre",
// };

// Schema defined rules

// {
// userName:String | Number,
// required:[true, "Please Enter Valid User ID"]
// },

// {
// password:Number | String,
// required:[true,"Please Enter Valid Password"]
// },
// {
//   captha:String,
//   required:[true," Please Enter Valid Captcha"]
// }

// captha:String

// // Mongodb install

// // Steps follow

// // npm i mongoose

// // Step 2

// // import

// // import mongoose from 'Mongoose';

// // mongoose.Schema()
// // mongoose.create()
// // mongoose.edit()
// // delete()

// Step 1
// // Mongodb Installation package install import connect

// // database succesfully

// Step 2

// const userData = {
//   UserName:"Nithish",
//   Passwird:"123234234",
//   captha:'34345345'
// }

// Rules  api desgin

// validations frontend or backedn
