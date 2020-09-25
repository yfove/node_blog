const express = require("express");
const Article = require("./../models/article");
// make a router that will allow us to create views
const router = express.Router();

router.get("/new", (req, res) => {
  res.render("articles/new", { article: new Article() });
});

router.get("/:slug", async (req, res) => {
  console.log(req.params.id); // log the params id
  const article = await Article.findOne({ slug: req.params.slug });
  if (article == null) res.redirect("/");
  res.render(`articles/show`, { article: article });
});

// this is going to be an async function so we need to set it up as so

router.post("/", async (req, res) => {
  let article = new Article({
    title: req.body.title,
    description: req.body.description,
    markdown: req.body.markdown,
  });
  try {
    article = await article.save();
    res.redirect(`/articles/${article.slug}`);
  } catch (e) {
    console.log(e);
    res.render("articles/new", { article: article });
  }
});

// we meed use a library called method override to delete
// in THML forms only GET and POST are allowed so we have to use middleware
// allows use to override the method use DELETE or PATCH
router.delete("/:id", async (req, res) => {
  await Article.findByIdAndDelete(req.params.id);
  res.redirect("/");
});

module.exports = router;
