const pool = require("./pool");

async function getAllMessages() {
    const { rows } = await pool.query("SELECT * FROM messages ORDER BY added ASC");
    return rows;
}

async function sendMessage(message, user) {
    await pool.query("INSERT INTO messages (text, username) VALUES ($1, $2)", [message, user]);
}

module.exports = {
    getAllMessages,
    sendMessage
};