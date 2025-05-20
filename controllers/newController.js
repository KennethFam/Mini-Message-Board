const db = require("../db/queries.js");

module.exports = {
    get: (req, res) => {
        res.render("../views/new/form", {title: "New Message"});
    },
    post: async (req, res) => {
        await db.sendMessage(req.body.message, req.body.name);
        res.redirect("/");
    }
}