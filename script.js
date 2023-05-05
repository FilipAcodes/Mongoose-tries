const mongoose = require("mongoose");

const { MONGO_URI } = process.env;
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
console.log(MONGO_URI);

mongoose.connect(MONGO_URI, options).then(() => console.log("connected"));
