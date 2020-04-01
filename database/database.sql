CREATE DATABASE restapitypescript;

CREATE TABLE users(
  id SERIAL PRIMARY KEY,
  name VARCHAR(40),
  email TEXT
);

INSERT INTO users (name, email)
VALUES ('Saul', 'saul@gmail.com'),
('Manu', 'elamigo@gmail.com');