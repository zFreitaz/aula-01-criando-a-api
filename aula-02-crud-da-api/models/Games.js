import mongoose from "mongoose";


// Criando o Schema no Banco de Dados
const gameSchema = new mongoose.Schema({
    title: String,
    platform: String,
    year: Number,
    price: Number
});

// Criando a coleção no Banco de Dados
const Game = mongoose.model('Game', gameSchema)

export default Game;