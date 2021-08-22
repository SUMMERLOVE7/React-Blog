CREATE DATABASE blog;

Use blog;

CREATE TABLE members (
    id varchar(30) NOT NULL,
    email varchar(30),
    name varchar(30) NOT NULL,
    picture varchar(50),
    PRIMARY KEY (id)
);

CREATE TABLE categories (
    category varchar(30) NOT NULL,
    PRIMARY KEY (category)
);

CREATE TABLE boards (
    num int(100) NOT NULL AUTO_INCREMENT,
    category varchar(30) NOT NULL,
    title varchar(30) NOT NULL,
    id varchar(30) NOT NULL,
    content text,
    date datetime NOT NULL,
    hit int(30) default 0 NOT NULL,
    PRIMARY KEY (num),
    CONSTRAINT fk_b_id FOREIGN KEY (id) REFERENCES members(id),
    CONSTRAINT fk_ct FOREIGN KEY (category) REFERENCES categories(category)
);

CREATE TABLE comments(
    num int(100) NOT NULL AUTO_INCREMENT,
    id varchar(30) NOT NULL,
    content text,
    PRIMARY KEY (num),
    CONSTRAINT fk_c_id FOREIGN KEY (id) REFERENCES members(id)
);

/*
CREATE DATABASE `blog`;

Use `blog`;

CREATE TABLE `members` (
    `m_id` varchar(30) NOT NULL,
    `m_email` varchar(30) NOT NULL,
    `m_name` varchar(30) NOT NULL,
    `m_picture` varchar(50),
    PRIMARY KEY (`m_id`)
);

CREATE TABLE `categories` (
    `ct_name` varchar(30) NOT NULL,
    PRIMARY KEY (`ct_name`)
);

CREATE TABLE `boards` (
    `b_num` int(100) NOT NULL AUTO_INCREMENT,
    `b_category` varchar(30) NOT NULL,
    `b_title` varchar(30) NOT NULL,
    `b_id` varchar(30) NOT NULL,
    `b_content` text,
    `b_date` datetime NOT NULL,
    `b_hit` int(30) default 0 NOT NULL,
    PRIMARY KEY (`b_num`)
);

ALTER TABLE `boards` (
    ADD FOREIGN KEY (`b_id`) REFERENCES `members(m_id)`,
    ADD FOREIGN KEY (`b_category`) REFERENCES `categories(ct_name)`
);

CREATE TABLE `comments`(
    `cm_num` int(100) NOT NULL AUTO_INCREMENT,
    `cm_id` varchar(30),
    `cm_content` text,
    PRIMARY KEY (`cm_num`)
);

ALTER TABLE `comments` ADD FOREIGN KEY (`cm_id`) REFERENCES `members(m_id)`;
*/