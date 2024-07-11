const { client } = require('./db')
const bycryptjs = require('bcrypt')
const jwt = require

const listUsers = async (req, res) => {
    res.send('Lista de usuarios')
}
const createUser = async (req, res) => {
    try{
        const senhacriptografada = await bycryptjs.HashSync(senha, 10)
        const {nome, email, senha } = req.body;
        const sql = `UPDATE usuários SET nome = $1, email $2, WHERE ID = $3 RETURNING*`
        const dados = await client.query(sql, [nome, email, senha])
        res.status(201).json({msg:'O user foi criado com sucesso '})
        console.log(dados)
    }catch(err){
        console.log(err)
        res.status(500).json({msg: 'Impossivel criar o usuario'})
    }
}
const updateUser = async (req, res) => {
    res.send('atualizou o usuario')
}
const deleteUser = async (req, res) => {
    const id = req.params.id;
    const sql ='DELETE FROM usuarios WHERE id = $1'
    const dados = await client.query(sql,[id])
    res.status(200).json

}
const getUser = async (req, res) => {
    res.send('Pegou o usuario')
}

module.exports = { listUsers, createUser, deleteUser, updateUser, getUser };