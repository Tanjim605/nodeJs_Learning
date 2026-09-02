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

// created this function cause: this fixed query line is repetitive.
async function createUser(name, email) {
  const result = await client.query(
    `
    INSERT INTO users (name, email)
    VALUES ($1, $2)
    RETURNING *
  `,
    [name, email]
  );

  return result.rows[0];
}

createUser("Tanjimul", "tanjim@gmail.com");

// reading all of the users.
const result = await client.query("SELECT * FROM users");

console.log(result.rows);

await client.end();
