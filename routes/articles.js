const express = require("express");
// make a router that will allow us to create views
const router = express.Router();

router.get("/new", (req, res) => {
  res.render("articles/new");
});

router.post("/new", (req, res) => {});

module.exports = router;
