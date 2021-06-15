const express = require("express");
const app = express();

// Setting up a port
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello, world");
});

app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});
