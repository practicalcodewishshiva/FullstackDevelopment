// npm i  express

const express = require("express");
const cors = require("cors");

const expressMainApplication = express();
const corsOptions = {
  origin: "http://localhost:5173",
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
};
expressMainApplication.use(cors(corsOptions));

expressMainApplication.use(express.json());

expressMainApplication.get("/", (req, res) => {
  res.send("initiali file is loading");
});

expressMainApplication.post("/login", (req, res) => {
  // json format
  console.log(req.body.email, "req");

  try {
    const userDetails = {
      userName: req.body.email,
      password: req.body.password,
      captcha: "TtHq",
    };


    // mongodb store  4 steps create read update delete 


    // account creation signup 

    // secutiy  mongodb schema userName data type enti? string nuber boolean null undeifne or symbol
    // schema creae 


    // Mongoose.new Schema{
    //   userName: String,
    //   password: String | Number,
    //   captcha:String
    // }
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

// https://www.irctc.co.in/nget/profile/user-signup

expressMainApplication.post("/profile/user-signup", (req, res) => {
  res.send("hgelllo");
});

expressMainApplication.listen(8000);

// db queries

// frontend 5173 Port

// Backend  8000 port




// Psudo Code 
Step 1 Form  filed from -- to input values
Step 2 Search 

Step 3 frontend to backend connect before that we have to create Route like 
/search-trains route 

FRONTEND REQ 

req.body.from
req.body.to
req.bosy.date
req.body.class

const {from, to, date,class} = req.body

mongoodb creation date creation 

response.send("account created succfully with the user", userName)