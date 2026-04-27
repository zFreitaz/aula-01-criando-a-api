// Middleware de Autenticação

import jwt from 'jsonwebtoken'
import userController from '../controllers/userController.js'

// Função para verificar a autenticação do usuário
// Verificar se ele possui token

const Authorization = (req, res, next) => {
    // Capturar o token do usuário através do cabeçalho da requisição
    const authToken = req.headers['authorization']
    // Verificando se o Token existe
    if (authToken != undefined) {
        const bearerToken = authToken.split(' ')
        const token = bearerToken[1]
        // Verificando se o token é válido
        jwt.verify(token, userController.JWTSecret, (error, data) => {
            // Se o token for válido
            if (erro) {
                res.status(401).json({error: "Acesso não autorizado. Token inválido."})
                // Se o token dor válido
            } else {
                req.token = token
                req.loggedUser = {
                    id: data.id,
                    email: data.email
                }
                // Prosseguindo com a requisição
                next()
            }
        })
        // Se o token não existir
    } else {
        res.status(401).json({eror: "Acesso não autorizado, você não está autenticado."})
    }

}
export default { Authorization }