const mongoose = require("mongoose");
const Game = require("../models/game");
const router = require("express").Router();

//test route
router.get("/test", async (req, res) => {
  res.render("test.ejs");
});

//creating-new games

router.get("/create", async (req, res) => {
  const games = await Game.find();
  res.render("create-game.ejs", { games });
});

router.get("/allgames", async (req, res) => {
  const games = await Game.find();
  res.render("all-games.ejs", { games });
});

module.exports = router;
