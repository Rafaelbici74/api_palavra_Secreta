const jwt = require('jsonwebtoken');
require('dotenv').config();

function verificarToken(req, res, next) {
  const authHeader = req.headers.authorization;

// Verifica se o token foi informado
  if (!authHeader) {
    return res.status(401).json({
      erro: 'Token não informado'
    });
  }

// Verifica o formato do token (Bearer TOKEN)
  const partes = authHeader.split(' ');

  if (partes.length !== 2 || partes[0] !== 'Bearer') {
    return res.status(401).json({
      erro: 'Formato do token inválido. Use: Bearer TOKEN'
    });
  }

  const token = partes[1];

// Verifica a validade do token
  try {
    const dados = jwt.verify(token, process.env.JWT_SECRET);

    req.perfil = dados;

    next();
  } catch (erro) {
    return res.status(401).json({
      erro: 'Token inválido ou expirado'
    });
  }
}

module.exports = verificarToken;
