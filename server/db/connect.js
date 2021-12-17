// const { MongoClient } = require('mongodb');

const mongoose = require('mongoose')

const url = "mongodb+srv://brignols:Kirsan-98@quizz-app.yk9zi.mongodb.net/quizz-app?retryWrites=true&w=majority";

const connectionParams={
  useNewUrlParser: true,
  useUnifiedTopology: true 
}

mongoose.connect(url,connectionParams)
  .then( () => {
      console.log('Connected to database quizz-app')
  })
  .catch( (err) => {
      console.error(`Error connecting to the database. \n${err}`);
  })

// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   console.log("You are now connected to the quizz-app cluster");
//   // perform actions on the collection object
//   client.close();
// });

const db = mongoose.connect

module.exports = db