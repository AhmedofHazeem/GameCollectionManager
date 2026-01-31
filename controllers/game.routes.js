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
  await Game.create({
    ...req.body,
    owner: req.session.user._id,
  });
  //add a display or alert that shows that game added successfully.
  res.redirect("/games/create");
});

router.get("/allgames", async (req, res) => {
  const games = await Game.find({ owner: req.session.user._id });
  res.render("all-games.ejs", { games });
});

//showing one game to the user + its properties
router.get("/show", async (req, res) => {
  const oneGame = await Game.find();
  res.render("show-game.ejs", { oneGame });
});

//editing a game (by ID) -- GET

router.get("/:id/edit", async (req, res) => {
  const games = await Game.findOne({
    _id: req.params.id,
    owner: req.session.user._id,
  });
  if (!games) return res.redirect("/games/allgames");

  res.render("edit-game.ejs", { games });
});

router.post("/:id/edit", async (req, res) => {
  await Game.findOneAndUpdate(
    {
      _id: req.params.id,
      owner: req.session.user._id,
    },
    req.body,
  );
  res.redirect(`/games/${req.params.id}/detail`);
});

router.get("/:id/detail", async (req, res) => {
  const games = await Game.findOne({
    _id: req.params.id,
    owner: req.session.user._id,
  });

  if (!games) return res.redirect("/games/allgames");
  res.render("game-details.ejs", { games: games });
});

//Deleting a game (by ID too) -- DELETE
router.post("/:id/delete", async (req, res) => {
  await Game.findOneAndDelete({
    _id: req.params.id,
    owner: req.session.user._id,
  });
  res.redirect("/");
});

module.exports = router;
