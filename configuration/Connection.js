import express from 'express';
import mysql from 'mysql';

const db = mysql.createConnection({
    host: 'localhost',
    user: "root",
    password: "",
    database:"db_magang"
})

export default db;