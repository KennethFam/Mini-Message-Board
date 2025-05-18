const { Client } = require("pg");

if (process.env.NODE_ENV !== "prod") {
    require("dotenv").config();
}

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
    text VARCHAR(255) NOT NULL,
    username VARCHAR(255) NOT NULL, 
    added TIMESTAMP DEFAULT NOW()
);
`;

async function main() {
    console.log("seeding...");
    const client = new Client( {
        connectionString: process.env.DATABASE_URL
    });
    await client.connect();
    await client.query(SQL);
    await client.end();
    console.log("messages table created!");
}

main();

