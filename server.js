const express = require("express");
const mongoose = require("mongoose");
const Article = require("./models/article");
const articleRouter = require("./routes/articles");
const app = express();

mongoose.connect("mongodb://localhost/blog", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

app.set("view engine", "ejs");
// we can access all the parameters from article form from the route
app.use(express.urlencoded({ extended: false }));

app.get("/", async (req, res) => {
  // making some fake articles
  const articles = await Article.find().sort({ createdAt: "desc" });

  // pass object into our index
  res.render("articles/index", { articles: articles });
});
// use our routers, this has to be below encoder
app.use("/articles", articleRouter);

app.listen(3000);
