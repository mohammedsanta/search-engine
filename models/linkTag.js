const mongoose = require('mongoose');

const linkTag = new mongoose.Schema({
    tag: String,
    title: String,
    link: String
});

const linkTagModel = mongoose.model('linkTag',linkTag)

module.exports = linkTagModel;