const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const blogRoutes = require("./routes/blogRoutes");

const app = express();

//connect to mongoDb
const dbURI =
  "mongodb+srv://nodetuts:FinbCWbJEcNxpvzL@nodetuts.7c0usxw.mongodb.net/note-tuts?retryWrites=true&w=majority";

mongoose
  .connect(dbURI)
  .then(() => {
    const PORT = 3000;
    app.listen(PORT, () => {
      console.log("Listening to port 3000");
    });
  })
  .catch((err) => {
    console.error(err.message);
  });

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(morgan("dev"));

app.get("/", (_, res) => {
  res.redirect("/blogs");
});

app.get("/about", (_, res) => {
  res.render("about", { title: "About" });
});

app.use("/blogs", blogRoutes);

// nodetuts Xz5D9nWWV3bjDikH;
//? 404 page
app.use((_, res) => {
  res.status(404).render("404", { title: "404" });
});
