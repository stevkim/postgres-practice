DROP TABLE IF EXISTS students;

CREATE TABLE students (
  id SERIAL PRIMARY KEY,
  name VARCHAR(60) NOT NULL,
  email VARCHAR(60) UNIQUE NOT NULL,
  age INTEGER NOT NULL
);

INSERT INTO students(name, email, age) VALUES ('Steven Kim', 'stev@email.com', 28), ('Steph Xu', 'steph@email.com', 15), ('Steeb', 'steeb@email.com', 15), ('Kimmy', 'kimmy@email.com', 11);