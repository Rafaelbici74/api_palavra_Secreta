const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();


// Função de login

async function login(req, res) {
  try {
    const { login, senha } = req.body;


    if (!login || !senha) {
      return res.status(400).json({
        erro: 'Login e senha são obrigatórios'
      });
    }

    if (login != "Rafael" || senha != "123456") {
      return res.status(401).json({
        erro: 'login ou senha inválidos'
      });
    }

// Gera o token JWT (inclui apenas o login; não armazena senha no token)
    const token = jwt.sign(
      { login },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRES_IN || '1h' }
    );

    return res.json({
      mensagem: 'Login realizado com sucesso.',
      token
    });

  } catch (erro) {
    console.error(erro);
    return res.status(500).json({
      erro: 'Erro interno ao fazer login'
    });
  }
}



// Função para rota protegida
async function frase(req, res) {
  return res.json({
    mensagem: 'Rota protegida acessada com sucesso',

    frase: 'A frase é:                        .'
  });
}

// Exporta as funções para serem usadas nas rotas
module.exports = {
  login,
  frase
};
