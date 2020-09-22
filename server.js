const express = require("express");
const articleRouter = require("./routes/articles");
const app = express();

app.set("view engine", "ejs");

// use our routers
app.use("/articles", articleRouter);

app.get("/", (req, res) => {
  // making some fake articles
  const articles = [
    {
      title: "test article",
      createdAt: new Date(),
      description: "Test description",
    },
    {
      title: "test article",
      createdAt: new Date(),
      description: "Test description2",
    },
    {
      title: "test article",
      createdAt: new Date(),
      description: "Test descriptio3",
    },
  ];

  // pass object into our index
  res.render("articles/index", { articles: articles });
});

app.listen(3000);
