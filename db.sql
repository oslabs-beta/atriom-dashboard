CREATE TABLE users (
    id SERIAL PRIMARY KEY NOT NULL,
    username VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(100) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE apps (
    id SERIAL PRIMARY KEY NOT NULL,
    user_id INT NOT NULL,
    name VARCHAR(50) NOT NULL,
    mongo_id VARCHAR(50) NOT NULL UNIQUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_user
        FOREIGN KEY(user_id)
            REFERENCES users(id)
);

SELECT * FROM users INNER JOIN apps ON apps.user_id = users.id WHERE users.id = 1;