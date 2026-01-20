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

router.post("/", async (req, res) => {
  const gameCreated = await Game.create(req.body);
  //add a display or alert that shows that game added successfully.
  res.redirect("/games/create");
});

router.get("/allgames", async (req, res) => {
  const games = await Game.find();
  res.render("all-games.ejs", { games });
});

//showing one game to the user + its properties
router.get("/show", async (req, res) => {
  const oneGame = await Game.find();
  res.render("show-game.ejs", { oneGame });
});

//editing a game (by ID) -- GET
//updating a game (by ID) -- PUT
//Deleting a game (by ID too) -- DELETE

module.exports = router;
