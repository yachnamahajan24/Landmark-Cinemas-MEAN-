var express = require('express');
const mongoose = require('mongoose');
//const Movie = mongoose.model('Movie');
const Movie = require("../../app_server/models/movie")


const getMovies = (req, res)=>{
    Movie.find().exec(function(err,moviedata){
        if(err){
            res.status(404).json(err);
        return;
        }
        res.status(200).json(moviedata);
    });
};

const createMovie =function(req, res){
    Movie.create({
        name: req.body.name,
        type:req.body.type,
        description:req.body.description,
        price:req.body.price,
        actor:req.body.actor
    }, (err,moviedata) =>{
        if(err){
            res.status(404).json(err);
        } else{
            res.status(201).json(moviedata);
        }
    
    });
};

const getSingleMovie =(req, res)=>{
    Movie
        .findById(req.params.movieid)
        .exec((err,movie)=>{
             if(!movie){
            return res.status(404).json({"message":"Movie not found"});
        } else if(err){
            return res.status(404).json(err);
        }
        res.status(200).json(movie);
    });
};

const updateMovie =(req, res)=>{
    if(!req.params.movieid){
        res.status(404).json({"message": "Not found, movieid is required"});
        return;
    }
    Movie.findById(req.params.movieid)
    .exec((err,moviedata)=>{
        if(!moviedata){
            res.json(404).status({"message":"movieid not found" });
            return;
        } else if (err){
            res.status(400).json(err);
            return;
        }
        moviedata.name = req.body.name;
        moviedata.type = req.body.type;
        moviedata.description = req.body.description;
        moviedata.price = req.body.price;
        moviedata.actor = req.body.actor;
        moviedata.save((err,moviedata)=>{
            if(err){
                res.status(404).json(err);
            }else {
                res.status(200).json(moviedata);
            }
        });
    });
 
};


const deleteMovie = (req, res)=>{
    const movieid = req.params.movieid;
    
    if(movieid){
        Movie
        .findByIdAndRemove(movieid)
        .exec((err,moviedata) =>{
            if(err){
                 res.status(404).json(err);
               
            }
            res.status(204).json(null);
        });
    }else{
         res.status(404).json({"message":"No movieid" });
    }};


 
module.exports = {
    getMovies,
    createMovie,
    getSingleMovie,
    updateMovie,
    deleteMovie
};
