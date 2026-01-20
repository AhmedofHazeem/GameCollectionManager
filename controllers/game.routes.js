const mongoose = require("mongoose");
const Game = require("../models/game");
const router = require("express").Router();

//test route
router.get("/test", async (req, res) => {
  res.redirect("test.ejs");
});

//creating-new games

router.get("/", async (req, res) => {
  const games = Game.find();
  res.redirect("create-game.ejs", { games });
});

router.get("/", async (req, res) => {
  const games = Gameame.find();
  res.redirect("all-games.ejs", { games });
});

module.exports = router;
