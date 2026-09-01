
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