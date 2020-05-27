const express = require('express');
const router = express.Router();

const ctrlMovie  = require('../controllers/movie');

router
    .route('/movies')
    .get(ctrlMovie.getMovies)
    .post(ctrlMovie.createMovie);

router
    .route('/movies/:movieid')
    .get(ctrlMovie.getSingleMovie)
    .put(ctrlMovie.updateMovie)
    .delete(ctrlMovie.deleteMovie);

module.exports = router;