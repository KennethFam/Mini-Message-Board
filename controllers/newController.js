const messages = require("../models/db.js");

module.exports = {
    get: (req, res) => {
        res.render("../views/new/form", {title: "New Message"});
    },
    post: (req, res) => {
        messages.push({text: req.body.message, user: req.body.name, added: new Date()});
        res.redirect("/");
    }
}