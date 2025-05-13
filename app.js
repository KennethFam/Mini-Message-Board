const express = require("express");
const app = express();
const path = require("node:path");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

const PORT = 8080;

indexRouter = require("./routes/index");
newRouter = require("./routes/new");
messageRouter = require("./routes/message");

app.use("/", indexRouter);
app.use("/new", newRouter);
app.use("/message", messageRouter);
app.use(["/:file", "/new/:file", "/message/:file"], (req, res, next) => {
    next(err);
});

app.listen(PORT, () => {
    console.log(`Server is currently running on port ${PORT}.`);
});

app.use((err, req, res, next) => {
    res.status(404).send("Error 404: Page not found.");
});
  
  