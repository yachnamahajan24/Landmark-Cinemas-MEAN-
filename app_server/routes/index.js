const express = require('express');
const router = express.Router();

// /* GET home page. */
// router.get('/', function(req, res, next) {
//     res.render('index', { title: 'Mobile Phone Store' });
//   });

var ctrlAbout = require('../controllers/about');
// var ctrllistdisplay = require('../controllers/list-display');
var ctrlindex = require('../controllers/index');
//  var ctrlnew = require('../controllers/list-display');


const ctrlMovie = require('../controllers/list-display');



router.get('/list', ctrlMovie.homelist);
router.get('/movies/:movieid', ctrlMovie.movieInfo);

router.route('/new')
      .get(ctrlMovie.addNewMovie)
      .post(ctrlMovie.doAddNewMovie);





// // /* Locations pages */
router.get('/', ctrlindex.index);
router.get('/about', ctrlAbout.about);
// router.get('/list', ctrllistdisplay.movielist);
// router.get('/new', ctrlnew.listdisplay);



module.exports = router;
