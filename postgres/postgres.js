import pg from "pg";

const { Client } = pg;

const client = new Client({
  user: "node_app",
  host: "localhost",
  database: "node_learning",
  password: "password",
  port: 5432,
});

await client.connect();

console.log("Connected to PostgreSQL!");

const result = await client.query("SELECT * FROM users");

console.log(result.rows);

await client.end();
