const express = require("express");
const app = express();
const path = require("node:path");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 8080;

indexRouter = require("./routes/index");
newRouter = require("./routes/new");
messageRouter = require("./routes/message");

app.use("/", indexRouter);
app.use("/new", newRouter);
app.use("/message", messageRouter);

app.listen(PORT, () => {
    console.log(`Server is currently running on port ${PORT}.`);
});
  
  