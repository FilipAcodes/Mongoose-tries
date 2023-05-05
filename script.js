const mongoose = require("mongoose");
const User = require("./mongooseModel");
require("dotenv").config();
const { MONGO_URI } = process.env;
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const test = async () => {
  mongoose.connect(MONGO_URI, options);
  const user = new User({
    _id: "georgemichael@1234567",
    playlists: [
      { playlistname: "Potato" },
      {
        songs: [
          {
            songname: "hi",
            artistname: "me",
            songId: 420,
            picture: "somepng",
          },
        ],
      },
    ],
  });
  await user.save();
  console.log("User created:", user);
  mongoose.connection.close();
};

test();
