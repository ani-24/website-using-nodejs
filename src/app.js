const express = require("express");
const app = express();

const path = require("path");
const hbs = require("hbs");

// Setting up a port
const port = process.env.PORT || 3000;

// Setting up paths
const pubPath = path.join(__dirname, "../public");
const viewPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

// middlewares
app.use(express.static(pubPath));
app.set("view engine", "hbs");
app.set("views", viewPath);
hbs.registerPartials(partialsPath);

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});
