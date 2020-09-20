const express = require("express");
// make a router that will allow us to create views
const router = express.Router();

router.get("/", (req, res) => {
  res.send("In articles");
});

module.exports = router;
