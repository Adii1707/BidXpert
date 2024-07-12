import mongoose from "mongoose";
const url = "mongodb://localhost:27017/indusApp";
// mongodb://localhost:27017/
mongoose.connect(url).catch(err => {
    if (err.name === 'MongoServerSelectionError') {
      console.error('Server selection error:', err.message);
    } else {
      console.error('Other connection error:', err);
    }
  });
  ;


console.log("Successfully connected to mongodb database...");
