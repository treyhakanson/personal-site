CREATE DATABASE personal_site;

CREATE TABLE contact_form (
        id SERIAL PRIMARY KEY,
        name VARCHAR(60) NOT NULL,
        email VARCHAR(155) NOT NULL,
        message VARCHAR(500) NOT NULL
);
