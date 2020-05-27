
var express = require('express');

const about = (req,res) => {
    res.render('about', {title:'About My Site'});
};
module.exports = {
    about
};
