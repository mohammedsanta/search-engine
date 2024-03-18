const express = require('express');
const linkModel = require('../models/link');
const tagsModel = require('../models/tags');
const linkTagModel = require('../models/linkTag');
const { authPage } = require('../middlewares/authPage');
const Router = express.Router();

Router.post('/link',authPage(['Admin']), async (req,res) => {

    const data = req.body;

    // case if i would create many data 

    // await linkModel.insertMany(data);

    // case if i would create single data

    const linkInstance = linkModel({
        title: data.title,
        link: data.link,
    });

    // save Data to Database

    linkInstance.save();

    res.send('created');
});

Router.post('/tag',authPage(['Admin']),(req,res) => {

    const data = req.body;

    const tagInstance = tagsModel({
        tag: data.tag
    });

    // save Data to Database

    tagInstance.save();

    res.send('created');
});

Router.post('/link/tag',authPage(['Admin']),(req,res) => {

    const data = req.body;

    // case if i would insert single Data

    // const searchTagInstance = linkTagModel({
    //     tag: data.tag,
    //     title: data.title,
    //     link: data.link
    // });

    // save Data to Database

    // searchTagInstance.save();

    // case if i would insert many Data
    
    linkTagModel.insertMany(data)

    res.send('created');
});

module.exports = Router