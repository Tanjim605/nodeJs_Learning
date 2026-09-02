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

async function updateUser(email, id) {
  const result = await client.query(
    `
    UPDATE users
    SET email = $1
    WHERE id = $2
    RETURNING *
  `,
    [email, id]
  );
}

async function deleteUser(id) {
  const result = await client.query(
    `
    DELETE FROM users
    WHERE id = $1
    RETURNING *
  `,
    [id]
  );
}

// createUser("Tanjimul", "tanjim@gmail.com")

// updateUser("tanjim2@gmail.com", 3)

// this delete is only working if there is a data on id: 2
// deleteUser(2)

// reading all of the users.
const result = await client.query("SELECT * FROM users");

console.log(result.rows);

await client.end();
