// Importar o express
import express from 'express';
// Carregar o express.Router()
const userRoutes = express.Router();
// Importar o Controller de usuários
import userController from '../controllers/userController.js';

// ENDPOINT para CADASTRAR um usuário
userRoutes.post("/user", userController.createUser)

// ENDPOINT para LOGAR um usuário
userRoutes.post("/auth", userController.loginUser)

export default userRoutes;
