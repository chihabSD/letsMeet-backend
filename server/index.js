import express from "express";
import dbConfig from './config/db'
const app = express();



// set up db
dbConfig()
const PORT = process.env.PORT || 3000;
app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`App is listening on port : ${PORT}`);
  }
});
