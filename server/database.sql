CREATE DATABASE donation;

CREATE TABLE organizations(
    org_id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    description VARCHAR(500)
);

CREATE TABLE registered_donations(
    rd_id SERIAL PRIMARY KEY,
    first_name VARCHAR(20),
    last_name VARCHAR(20)
);