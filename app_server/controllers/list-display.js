const request = require('request');

const apiOptions = {
    server : 'http://localhost:3000'
}

const _renderHomepage = function(req,res,responseBody){
    res.render('list-display',{
        movies: responseBody
    });;
}

const homelist = function(req,res){
        const path = '/api/movies';
        const requestOptions = {
            url : apiOptions.server + path,
            method : 'GET',
            json : {}
        };
    request(
        requestOptions,
            (err,reponse,body)=>{
            _renderHomepage(req,res,body)
        }
    );
};


const _renderDetailPage = function(req,res,responseBody){
    res.render('display',{
       currentMovie : responseBody 
    });
};

const movieInfo = function(req,res){
    const path = `/api/movies/${req.params.movieid}`;
    const requestOptions = {
        url : apiOptions.server + path,
        method : 'GET',
        json : {}
    };
    request(
        requestOptions,
        (err,response,body) => {
            _renderDetailPage(req,res,body)
        }
    );
};

const _renderCreatePage = function(req,res){
    res.render('create-new-movie',{
        title : "Add New Movie"
    });
}

const addNewMovie = function(req,res){
    _renderCreatePage(req,res);
}

const doAddNewMovie = function(req,res){
    const path = '/api/movies';
    const postdata = {
        name : req.body.name,
        type : req.body.type,
        description : req.body.description,
        price : req.body.price,
        actor : req.body.actor
    };
    const requestOptions = {
        url: apiOptions.server+path,
        method : 'POST',
        json: postdata
    };
    request(
    requestOptions,
    (err,response,body)=>{
        if(response.statusCode === 201){
            res.redirect('/list');
        }
    }
    )
}

module.exports = { 
	homelist,
    movieInfo,
    doAddNewMovie,
    addNewMovie
}; 




