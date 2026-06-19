const express = require('express');
const router = express.Router();

const authController = require('../controllers/authcontroller');
const verificarToken = require('../middlewares/authMiddleware');

router.post('/login', authController.login);

// Rota protegida
router.get('/frase', verificarToken, authController.frase);

module.exports = router;
