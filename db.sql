CREATE DATABASE portfolio_messages;

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE messages(
    message_id uuid DEFAULT uuid_generate_v4(),
    sender_name VARCHAR(50),
    sender_email VARCHAR(50),
    sender_message VARCHAR(1024),
    message_sent TIMESTAMPTZ
);