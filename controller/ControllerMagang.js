import express from "express";
import db from '../configuration/Connection.js';

export const getMagang = (req, res) =>{
    const sql = 'SELECT * FROM MAGANG';
    db.query(sql, (error, result) =>
    res.json(result));
};

export const getMagangByidMagang = (req, res) =>{
    const IdMagang = req.query.idMagang;
    const sql = `SELECT * FROM MAGANG WHERE idMagang = ${IdMagang}`;
    db.query(sql, (error, result) =>{
        res.json(result);
    });
};

export const createMagang = (req, res) =>{
    const { idMagang, Nama, Desk, tglMulai, tglSelesai, Status} = req.body;
    const sql = 'INSERT INTO MAGANG (idMagang, Nama, Desk, tglMulai, tglSelesai, Status) VALUES (?, ?, ?, ? ,?, ?)';
    db.query(sql, [idMagang, Nama, Desk, tglMulai, tglSelesai, Status], (error, result) =>{
        if(error){
            res.status(404)
            res.send(error)
        };
        res.json(result);
    });
};

export const updateMagang = (req, res) =>{
    const IdMagang = req.query.idMagang;
    const { Nama, Desk, tglMulai, tglSelesai, Status} = req.body;
    if(Nama || Desk|| tglMulai || tglSelesai || Status){
        const query = `UPDATE MAGANG SET Nama = "${Nama}", Desk = "${Desk}", tglMulai = "${tglMulai}", tglSelesai = "${tglSelesai}", Status = "${Status}" WHERE idMagang = "${IdMagang}"`;
        db.query(query, (error, result) =>{
            if(error) res.status(400).send(error.message);
            res.json(result);
        });
    } else{
        res.send("isi sendiri");
    };
};

export const deleteMagang = (req, res) =>{
    const nim = req.query.nim;
    const sql = 'DELETE FROM MAGANG WHERE idMagang = ?';
    db.query(sql, [nim], (error, result) =>{
        if(error){
            res.status(404)
            res.send(error)
        };
        res.status(200);
        res.json('Data berhasil dihapus');
    }); 
};
