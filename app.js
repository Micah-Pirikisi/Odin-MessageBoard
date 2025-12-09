const express = require("express");
const path = require("path");
const indexRouter = require("./routes/index");
const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: false }));

// Index route
app.get("/", (req, res) => {
  res.render("index", { title: "Home Page" });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
