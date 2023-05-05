const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  _id: String,
  playlists: [
    {
      playlistname: String,
      songs: [
        {
          songName: String,
          artistName: String,
          songId: Number,
          picture: String,
        },
      ],
    },
  ],
});

const User = mongoose.model("User", userSchema);

module.exports = User;
