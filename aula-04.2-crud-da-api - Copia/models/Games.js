import mongoose from "mongoose";

// o campi "descriptions" será um documento aninhado
const descriptionsSchema = new mongoose.Schema({
    genre: String, // gênero
    platform: String, // plataforma
    rating: String, // classificação de idade
})

// Criando o Schema no Banco de Dados"
const gameSchema = new mongoose.Schema({
    title: String,
    year: Number,
    price: Number,
    descriptions : descriptionsSchema

    // Definindo o campo como array
   // descriptions : descriptionsSchema
});

// Criando a coleção no Banco de Dados
const Game = mongoose.model('Game', gameSchema)

export default Game;