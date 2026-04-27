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
    async Create(title, year, price, descriptions) {
        try {
            const newGame = new Game({
                //DESTRUTURAÇÃO (title : title)
                title,
                year,
                price,
                descriptions
            })
            // Gravando no banco
            await newGame.save() // .save() método do  Mongose para cadastrar no DB
        } catch (error) {
            console.log(error)
        }

    }
    // MÉTODO PARA EXCLUIR UM JOGO
    async Delete(id) {
        try {
            // EXCLUINDO O JOGO PELA ID
            await Game.findByIdAndDelete(id)
            console.log(`Game com a id: ${id} foi deletado.`)
        } catch (error) {
            console.log(error)
        }
    }
    // MÉTODO PARA ALTERAR JOGO
    async Update(id, title, year, price, descriptions) {
        try {
            const updateGame = await Game.findByIdAndUpdate(id, {
                title,
                year,
                price,
                descriptions
            },
                { new: true }
            )        
            console.log(`O jogo com a id ${id} foi alterada.`)
            return updateGame
        } catch (error) {
            console.log(error)
        }
    }

    // Método para listar um jogo único
    async getOne(id) {
        try {
            const game = await Game.findOne({ _id: id })
            return game
        } catch (error) {
            consol.log(error)
        }
    }
}
// Exportando a Classe
export default new gameService()