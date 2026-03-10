import express from 'express';
import gameController from '../controllers/gameController.js';
const gameRoutes = express.Router()

// Na camada de routes é armazenado os EDNPOINTS (URLs) da API

// Endpoint para listar todos os games
gameRoutes.get("/games", gameController.getAllGames)

// Endpoint para cadastrat um game
gameRoutes.post("/games", gameController.createGame)

// ENDPOINT PARA EXCLUIR UM GAME
gameRoutes.delete("/games/:id", gameController.deleteGame)

// ENDPOINT PARA ALTERAR UM GAME
gameRoutes.put("/games/:id", gameController.updateGame)

// ENDPOINT PARA LISTAR UM JOGO ÚNICO
gameRoutes.get("/games/:id", gameController.getOneGame)

export default gameRoutes;