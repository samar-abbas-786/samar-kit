import mongoose from "mongoose";
if(!process.env.MONGO_URI){
    console.log("Enter you mongodb database url in .env file")
}
mongoose.connect(process.env.MONGO_URI).then(() => {
  console.log("MongoDB Connected");
});
