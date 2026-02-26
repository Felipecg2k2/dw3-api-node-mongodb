import Game from '../models/Games.js';

class gamesService {
    // Método (serviço) para buscar todos os registros no banco
    // funções assíncronas são não bloqueantes
    async getAll(){
        // try trata o sucesso
        try {
            // .find é o método do mongoose para buscar todos os documentos de uma coleção
            const games = await Game.find();
            return games;
        // catch trata o erro
        } catch (error) {
            console.log(error);
        }
    }
}

// Exportando a classe
export default new gamesService()