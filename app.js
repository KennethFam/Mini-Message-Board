if (process.env.NODE_ENV !== "prod") {
    require("dotenv").config();
}

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
app.use((req, res, next) => {
    next(new Error("Page not found!"));
});

app.use((err, req, res, next) => {
    console.log(err);
    res.status(404).send("Error 404: Page not found.");
});

app.listen(PORT, () => {
    console.log(`Server is currently running on port ${PORT}.`);
});