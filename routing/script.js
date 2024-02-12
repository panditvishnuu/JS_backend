const { log } = require("console");
const express = require("express");

const app = express();
const port = 4000;

app.set("view engine", "ejs");
app.use(express.static("./public"));

//middleware
// app.use((req,res,next) => {
//     console.log("middleware listening");
//     next();
// })

// template engine
app.get("/", (req, res) => {
  res.render("index", { pandit: "Vishnu" });
});

app.get('/error', () => {
    throw Error("i don't know");
})

app.get("/profile", (req, res) => {
  res.send("hellow world from profile");
});

// dynamic routing
app.get("/profile/:username", (req, res) => {
  res.send(`hello from ${req.params.username}`);
});

app.use(function errorHandler(err, req, res, next) {
  if (res.headersSent) {
    return next(err);
  }
  res.status(500);
  res.render("error", { error: err });
});

app.listen(port, () => {
  console.log(`port is listening on ${port}`);
});
