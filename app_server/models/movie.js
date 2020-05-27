const mongoose = require('mongoose');


var moreInfoSchema = new mongoose.Schema({
    reviews:{type:String, required:true} ,
    rating: {type:Number, "default":0, min:0, max:5},
    
});

const movieSchema = new mongoose.Schema({
    name:{type:String, required:true} ,
    type: {type:String, required:true},
    description:{type:String, required:true, min:3},
    price:{type:String, required:true, min:3},
    actor:{type:String, required:true, min:3},
    moviesLists:[moreInfoSchema]

});


module.exports = mongoose.model('Movie',movieSchema);