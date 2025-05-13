messages = require("../models/db.js")

module.exports = {
    get: (req, res) => {
        res.render("../views/index", {title: "Mini Message Board", messages: messages});
    }
}