// IMPORTANDO O MODEL
import Game from "../models/Games.js";

class gameService {
    // Método (serviço) para buscar todos os registros no banco
    // funções asíncronas são não bloqueantes
    async getAll() {
        // try trata o sucesso
        try {
            // .find() é o método do mongoose para buscar registros no banco
            const games = await Game.find()
            return games;


        // catch trata a falha    
        } catch(error) {
            console.log(error)
        }
    }
    // Método para cadastrar um Game
    async Create(title, platform, year, price) {
        try {
            const newGame = new Game({
                //DESTRUTURAÇÃO (title : title)
                title,
                platform,
                year,
                price
            })
            // Gravando no banco
            await newGame.save() // .save() método do  Mongose para cadastrar no DB
        } catch (error) {
            console.log(error)
        }

    }
}
// Exportando a Classe
export default new gameService()