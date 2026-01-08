const mongoose = require("mongoose");

const connectDB = async function getMongo() {
  try {
    const connectMongodb = await mongoose.connect(
      "mongodb+srv://vshivakumar9677_db_user:8Ueoyh9kZ6VCPva5@fullstack.zea1zds.mongodb.net/"
    );
    console.log("database connected succesfully");
  } catch (error) {
    console.log(error, "database connect avadam lehdu check cheyu", error);
  }
};




// frontend 
// export default application;


// backedn

module.exports = connectDB;