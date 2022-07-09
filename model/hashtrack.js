const mongoose = require("mongoose");

const hashTrackSchema = new mongoose.Schema({
  hashtag: {
    type: String,
    required: true
  },
});

module.exports = mongoose.model("HashTrack", hashTrackSchema);
