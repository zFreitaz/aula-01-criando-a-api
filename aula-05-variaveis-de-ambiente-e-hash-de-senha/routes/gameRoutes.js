import express from 'express';
import gameController from '../controllers/gameController.js';
const gameRoutes = express.Router()

// Importando o Middleware de Autenticação
import Auth from '../middleware/Auth.js'

// Na camada de routes é armazenado os EDNPOINTS (URLs) da API

// Endpoint para listar todos os games
gameRoutes.get("/games", Auth.Authorization, gameController.getAllGames)

// Endpoint para cadastrat um game
gameRoutes.post("/games", Auth.Authorization, gameController.createGame)

// ENDPOINT PARA EXCLUIR UM GAME
gameRoutes.delete("/games/:id", Auth.Authorization, gameController.deleteGame)

// ENDPOINT PARA ALTERAR UM GAME
gameRoutes.put("/games/:id", Auth.Authorization, gameController.updateGame)

// ENDPOINT PARA LISTAR UM JOGO ÚNICO
gameRoutes.get("/games/:id", Auth.Authorization, gameController.getOneGame)

export default gameRoutes;