const express = require("express");
const Article = require("./../models/article");
// make a router that will allow us to create views
const router = express.Router();

router.get("/new", (req, res) => {
  res.render("articles/new", { article: new Article() });
});

router.get("/edit/:id", async (req, res) => {
  const article = await Article.findById(req.params.id);
  res.render('articles/edit', { article: article });
});

router.get("/:slug", async (req, res) => {
  console.log(req.params.id); // log the params id
  const article = await Article.findOne({ slug: req.params.slug });
  if (article == null) res.redirect("/");
  res.render('articles/show', { article: article });
});

// this is going to be an async function so we need to set it up as so

router.post("/", async (req, res, next) => {
  req.article = new Article();
  next();
},
  saveArticleAndRedirect("new"));

router.put("/:id", async (req, res, next) => {
  req.article = await Article.findById(req.params.id);
  next();
},
  saveArticleAndRedirect("edit")
);

// we meed use a library called method override to delete
// in THML forms only GET and POST are allowed so we have to use middleware
// allows use to override the method use DELETE or PATCH
router.delete("/:id", async (req, res) => {
  await Article.findByIdAndDelete(req.params.id);
  res.redirect("/");
});

function saveArticleAndRedirect(path) {
  return async (req, res) => {
    let article = req.article
    article.title = req.body.title
    article.description = req.body.description
    article.markdown = req.body.markdown
    try {
      article = await article.save();
      res.redirect(`/articles/${article.slug}`);
    } catch (e) {
      console.log(e);
      res.render(`articles/#{path}`, { article: article });
    }
  }
}

module.exports = router;
