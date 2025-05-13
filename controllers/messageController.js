module.exports = {
    post: (req, res) => {
        res.render("../views/message", {message: JSON.parse(req.body.message), back: true});
    }
}