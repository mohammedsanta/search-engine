const express = require('express');
const linkModel = require('../models/link');
const { searchAlgorithm } = require('../helpers/search.js');
const { authPage } = require('../middlewares/authPage.js');


const Router = express.Router();

Router.get('/search',authPage(['Admin','Researcher']),async (req,res) => {
    
    let search = req.query.q;

    // test case
    // const searching = ["german","job"]

    // if contains white speace

    search = search.split(' ');

    
    const getAll = await searchAlgorithm(search)

    // Last thing get links to print

    const result = await linkModel.find({ title : getAll }).exec();
    
    // End


    res.json(result);

});

module.exports = Router