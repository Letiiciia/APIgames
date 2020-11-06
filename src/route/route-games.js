const express = require('express');

const router = express.Router();

const controller = require('../controller/controller-games');

router.get('/games', controller.getGames);
router.get('/games/:id', controller.getGamesById);
router.post('/games', controller.addGame);
router.patch('/games/:id', controller.updateGames);
router.delete('/games/:id', controller.deleteGame);

module.exports = router;