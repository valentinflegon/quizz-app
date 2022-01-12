const mongoose = require('mongoose');
const dotenv = require("dotenv");
dotenv.config();

const connectionParams = {
  useNewUrlParser: true,
  useUnifiedTopology: true
}

async function connectDB(){
  try{
    console.log("Opening connection db");
    const conn = await mongoose.connect(process.env.MONGO_URI, connectionParams);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  }
  catch(err){
    mongoose.disconnect();
    console.error(err);
    process.exit(1);
  }
}
  
// const db = mongoose.connection

module.exports = connectDB