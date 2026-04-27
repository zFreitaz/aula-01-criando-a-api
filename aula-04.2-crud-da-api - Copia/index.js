import express from "express";

// Importando o MONGOOSE
import mongoose from "mongoose";

// Importando o Model
import Game from "./models/Games.js"

// Importando o Model de Usuários
import User from "./models/Users.js"

// Importando as Rotas
import gameRoutes from "./routes/gameRoutes.js";

// Importando Rotas as de Usuários
import userRoutes from "./routes/userRoutes.js";

const app = express();


//Configurações do Express
app.use(express.json()) //Pertime o uso de json na aplicação

// ATIVANDO A UTILIZAÇÃO DAS ROTAS
app.use('/', gameRoutes)
app.use('/', userRoutes)

// Iniciando a conexão do Banco de Dados MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/api-the-games-novo")

// app.get("/", (req, res) => {
//     const games = [
//         {
//             title: "Game 1",
//             year: "2020",
//             plataform: "PC",
//             price: 20
//         },
//         {
//             title: "Game 2",
//             year: "2024",
//             plataform: "Xbox",
//             price: 30
//         },
//     ]
//     res.status(200).json(games)
// });
   
// Rodando a API na porta 4000
const port = 4002;
app.listen(port, (error) => {
    if (error) {
        console.log(error)
    } else {
        console.log(`API rodando em http://localhost:${port}`)
    }
})



