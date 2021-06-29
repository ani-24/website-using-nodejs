require("dotenv").config();

const express = require("express");
const app = express();

const path = require("path");
const hbs = require("hbs");
const { urlencoded } = require("express");

require("./db/conn");
const Message = require("./models/usermsg");

// Setting up a port
const port = process.env.PORT || 3000;

// Setting up paths
const pubPath = path.join(__dirname, "../public");
const viewPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

// middlewares

app.use(express.urlencoded({ extended: false }));

app.use(express.static(pubPath));
app.set("view engine", "hbs");
app.set("views", viewPath);
hbs.registerPartials(partialsPath);

app.get("/", (req, res) => {
  res.render("index", {
    activeLink: "home",
  });
});

app.get("/course", (req, res) => {
  res.render("course", {
    activeLink: "courses",
  });
});

app.get("/contact", (req, res) => {
  res.render("contact", {
    activeLink: "contact us",
  });
});

app.post("/contact", async (req, res) => {
  try {
    const msg = new Message(req.body);
    await msg.save();
    res.status(201).render("contact", {
      activeLink: "contact us",
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

app.get("*", (req, res) => {
  res.render("404page");
});

app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});
