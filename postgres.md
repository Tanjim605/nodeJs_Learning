### Using postgres from terminal

```
<!-- // go into postgres: -->
sudo -u postgres psql
psql (18.6 (Ubuntu 18.6-0ubuntu0.26.04.1))
Type "help" for help.

postgres=# \c node_learning
You are now connected to database "node_learning" as user "postgres".
node_learning=# CREATE TABLE users(
node_learning(#   id SERIAL PRIMARY KEY,
node_learning(#   name TEXT,
node_learning(#   email TEXT
node_learning(# );

CREATE TABLE

<!-- // view table -->
node_learning=# \dt
          List of tables
 Schema | Name  | Type  |  Owner   
--------+-------+-------+----------
 public | users | table | postgres
(1 row)

<!-- // insertion -->
node_learning=# INSERT INTO users(name, email)
node_learning-# VALUES('Tanjim', 'tanjim@gmail.com');
INSERT 0 1

<!-- // view -->
node_learning=# SELECT * FROM users
node_learning-# ;
 id |  name  |      email       
----+--------+------------------
  1 | Tanjim | tanjim@gmail.com
(1 row)
```


### Creating postgres user account:
```
<!-- open postgres -->
sudo -u postgres psql

<!-- create user node_app  -->
CREATE USER node_app WITH PASSWORD 'node_password';

<!-- Now give this user access to our learning database: -->
GRANT ALL PRIVILEGES ON DATABASE node_learning TO node_app;

<!-- Now connect to our database: -->
\c node_learning

<!-- And grant access to the existing table: -->
GRANT ALL PRIVILEGES ON TABLE users TO node_app;

<!-- You should get: -->
GRANT

<!-- There's one more permission we'll need because our id uses SERIAL. -->
GRANT USAGE, SELECT, UPDATE ON SEQUENCE users_id_seq TO node_app;

<!-- Then exit: -->
\q
```
