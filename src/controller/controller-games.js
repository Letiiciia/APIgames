const { get } = require('mongoose');
const games = require('../model/gamesSchema');
const repositoryGames = require('../model/repository-games');

const getGames = (request, response) => {
    console.log(request.url);
    games.gamesCollection.find((error, games) => {
        if (error) {
            return response.status(500).send(error);
        } else {
            return response.status(200).send(games)
        }
    })
}

const getGamesById = (request, response) => {
    const gameId = request.params.id;
    games.gamesCollection.findById(gameId, (error, games) => {
        if (error) {
            return response.status(500).send(error);
        } else {
            if (games) {
                return response.status(200).send(games);
            } else {
                return response.status(404).send("Game não encontrado!");
            }
        }
    })
}

const addGame = (request, response) => {
    console.log(request.url);
    const gameBody = request.body;
    const newGame = new games.gamesCollection(gameBody);

    newGame.save((error) => {
        if (error) {
            return response.status(400).send(error);
        } else {
            return response.status(201).send(newGame);
        }
    })
}

const updateGames = (request, response) => {
    const idParam = request.params.id;
    const gameBody = request.body;
    const novo = { new: true };

    games.gamesCollection.findByIdAndUpdate(
        idParam,
        gameBody,
        novo,
        (error, games) => {
            if (error) {
                return response.status(500).send(error);
            } else if (games) {
                return response.status(200).send(games);
            } else {
                return response.status(404).send("Game não encontrado");
            }
        }
    )
}

const deleteGame = (request, response) => {
    const idParam = request.params.id;
    games.gamesCollection.findByIdAndDelete(
        idParam,
        (error, games) => {
            if (error) {
                return response.status(500).send(error);
            } else if (games) {
                return response.status(200).send("Game apagado com sucesso!");
            } else {
                return response.status(404).send("Game não encontrado!");
            }
        })
}

module.exports = {
    getGames,
    getGamesById,
    addGame,
    updateGames,
    deleteGame
}