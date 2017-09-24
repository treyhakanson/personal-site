CREATE DATABASE personal_site;

CREATE TABLE contact_form (
        id SERIAL PRIMARY KEY,
        name VARCHAR(60) NOT NULL,
        email VARCHAR(155) NOT NULL,
        message VARCHAR(500) NOT NULL
);

CREATE TABLE blog_posts (
        id SERIAL PRIMARY KEY,
        tm TIMESTAMP NOT NULL,
        title VARCHAR(60) UNIQUE NOT NULL,
        hook VARCHAR(155) NOT NULL,
        banner_img VARCHAR(60) NOT NULL,
        author_name VARCHAR(60) NOT NULL,
        author_img VARCHAR(1000) NOT NULL,
        blog_body JSON NOT NULL
);

CREATE TABLE projects (
        id SERIAL PRIMARY KEY,
        tm TIMESTAMP NOT NULL,
        title VARCHAR(60) UNIQUE NOT NULL,
        banner_img VARCHAR(60) NOT NULL,
        project_body JSON NOT NULL
);
