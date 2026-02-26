// Importando o services
import gamesService from '../services/gameService.js';

// Função para tratar a requisição de listar os jogos
const getAllGames = async (req, res) => {
    try {
        const games = await gamesService.getAll()
        res.status(200).json(games)
        // Cod. 200 (ok) : Requisição feita com sucesso
    } catch (error) {
        console.log(error);
        res.status(500).json({message: 'Erro interno do servidor'})
        // Cod. 500 (erro interno) : Erro no servidor

    }
}

export default { getAllGames }