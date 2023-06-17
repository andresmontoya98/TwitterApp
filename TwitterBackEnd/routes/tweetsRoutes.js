const express = require('express');
const { getTweetsController, newTweetController, getSingleTweetController, deleteTweetController } = require('../controllers/tweets');
const { authUser } = require('../middlewares/auth');

const tweetsRoutes = express.Router();

tweetsRoutes.route('/').all(authUser).post(newTweetController);
tweetsRoutes.route('/').all(authUser).get(getTweetsController);
tweetsRoutes.route('/tweet/:id').get(getSingleTweetController);
tweetsRoutes.route('/tweet/:id').all(authUser).delete(deleteTweetController);

module.exports = tweetsRoutes;