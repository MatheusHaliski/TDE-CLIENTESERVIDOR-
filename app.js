const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql2');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'PUC@1234',
    database: 'mydb'
});

db.connect((err) => {
    if (err) throw err;
    console.log('Conectado ao MySQL');
});

// Rota para inserir dados na tabela "animal"
app.post('/animal', (req, res) => {
    const { nome, especie, nomedono, emaildono } = req.body;
    const query = 'INSERT INTO animal (nome, especie, nomedono, emaildono) VALUES (?,?,?,?)';
    db.query(query, [nome, especie, nomedono, emaildono], (err, result) => {
        if (err) throw err;
        res.json({ mensagem: 'Animal adicionado com sucesso' });
    });
});

// Rota para consultar dados da tabela "animal"
app.get('/animal2', (req, res) => {
    const query = 'SELECT * FROM animal';
    db.query(query, (err, results) => {
        if (err) throw err;
        res.json(results); // Envia os resultados da consulta como resposta
    });
});

// Rota para atualizar um registro na tabela "animal" pelo ID
app.put('/animal4/:id', (req, res) => {
    const { id } = req.params;
    const { nome, especie, nomedono, emaildono } = req.body;
    const query = 'UPDATE animal SET nome = ?, especie = ?, nomedono = ?, emaildono = ? WHERE id = ?';
    db.query(query, [nome, especie, nomedono, emaildono, id], (err, result) => {
        if (err) throw err;
        if (result.affectedRows === 0) {
            res.status(404).json({ mensagem: 'Animal não encontrado' });
        } else {
            res.json({ mensagem: `Animal com ID ${id} atualizado com sucesso` });
        }
    });
});

// Rota para deletar um registro na tabela "animal" pelo ID
app.delete('/animal5/:id', (req, res) => {
    const { id } = req.params;
    const query = 'DELETE FROM animal WHERE id = ?';
    db.query(query, [id], (err, result) => {
        if (err) throw err;
        if (result.affectedRows === 0) {
            res.status(404).json({ mensagem: 'Animal não encontrado' });
        } else {
            res.json({ mensagem: `Animal com ID ${id} deletado com sucesso` });
        }
    });
});

const PORT = 3500;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
