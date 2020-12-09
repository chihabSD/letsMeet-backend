import mongoose from "mongoose";

export default () => {
  mongoose.Promise = global.Promise;
  mongoose.connect("mongodb://localhost/letsmeet", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  mongoose.connection
    .once("open", () => console.log("DB is running"))
    .on("error", (err) => console.error(err));
};
