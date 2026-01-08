const { default: mongoose } = require("mongoose");

const UserLoginSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: [true, "User Name is required or mandatory"],
  },
  password: {
    type: String,
    required: [true, "password is mandatory"],
  },
  fullName: {
    type: String,
    required: [true, "Fullname is required"],
  },

  captcha: {
    type: String,
    required: [true, "Captcha is mandatory"],
  },

  conformPassword: {
    type: String,
    required: [true, "Captcha is mandatory"],
  },
});

module.exports = mongoose.model("login", UserLoginSchema);
