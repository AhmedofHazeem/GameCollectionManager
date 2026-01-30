//title, platform, genre, hoursplayed, completed, rating
//string, string, string, number, boolean, number
//username, password
//string, string

const mongoose = require("mongoose");

const gameSchema = new mongoose.Schema({
  gameName: {
    type: String,
    required: true,
  },
  platform: {
    type: String,
    required: true,
  },
  genre: {
    type: String,
    required: true,
  },
  hoursPlayed: Number,
  completed: Boolean,
  rating: {
    type: Number,
    min: 1,
    max: 5,
  },
});

const Game = mongoose.model("Game", gameSchema);

module.exports = Game;
