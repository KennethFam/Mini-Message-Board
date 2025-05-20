const db = require("../db/queries.js");

module.exports = {
    get: async (req, res) => {
        // remember to await async functions
        const messages = await db.getAllMessages();
        res.render("../views/index", {title: "Mini Message Board", messages: messages});
    }
}