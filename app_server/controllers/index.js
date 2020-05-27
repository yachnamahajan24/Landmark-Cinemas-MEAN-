
var express = require('express');

const index = (req,res) => {
    res.render('index', {title:'LandMark Cinemas !!!'});
};
module.exports = {
   index
};
